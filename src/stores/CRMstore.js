import { defineStore } from 'pinia';
import { getDatabase, ref, set, onValue } from "firebase/database"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth"
let _userInfo = localStorage.getItem('user-info');
export const CRMstore = defineStore('crmstore', {
    state: () => {
        return {
            _userInfo: _userInfo ? JSON.parse(_userInfo) : {},
            currencyInfo: {}
        }
    },
    actions: {
        getUid() {
            const auth = getAuth()
            const user = auth.currentUser;
            if (user) {
                const uid = user.uid
                return uid ? uid : null
            }
            return
        },

        async register({ email, password, name }) {
            const auth = getAuth();
            try {
                await createUserWithEmailAndPassword(auth, email, password, name)
                    .then((userCredential) => {
                        const user = userCredential.user
                        const uid = user.uid
                        const email = user.email
                        user.displayName = name
                        const db = getDatabase();
                        set(ref(db, 'users/' + uid), {
                            username: user.displayName,
                            email,
                            bill: 100
                        })

                    })
            }
            catch (e) {
                this.$toast.error(e)
            }
        },

        async login({ email, password }) {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password)
            this.setUserInfo()
        },

        async logout() {
            const auth = getAuth();
            await signOut(auth).then(() => {
                this.clearInfo();
            }).catch((e) => {
                this.$toast.error(e)
            })

        },

        async setUserInfo() {
            try {
                const uid = await this.getUid()
                const db = getDatabase()
                const userInfo = ref(db, '/users/' + uid);
                onValue(userInfo, (snapshot) => {
                    const data = snapshot.val();
                    this._userInfo = data
                    localStorage.setItem("user-info", JSON.stringify(data))
                });


            } catch (e) {
                this.$toast.error(e)
            }

        },

        async getCurrency(to, from) {
            const key = process.env.VUE_APP_API_P5ENDPOINT_API_KEY
            let myHeaders = new Headers();
            myHeaders.append("apikey", key);
            const requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders,
                withCredentials: false,
            };
            const amount = this.GET_USER_BILL
            const res = await fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)

            return await res.json()
        },

        clearInfo() {
            if (this.currencyInfo) {
                this.currencyInfo = {}
                this._userInfo = {}
            }
            //localStorage.removeItem("userInfo");
        },

    },

    getters: {
        GET_USER_NAME: (state) => state._userInfo.username,
        GET_USER_BILL: (state) => state._userInfo.bill,
        GET_CURRENCY_INFO: (state) => state.currencyInfo,
        GET_USER_INFO: (state) => state._userInfo,
    }
})