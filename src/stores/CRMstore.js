import { defineStore } from 'pinia';
import { getDatabase, ref, set, onValue } from "firebase/database"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth"
export const CRMstore = defineStore('crmstore', {
    state: () => {
        return {
            error: null,
            _userInfo: {}
        }
    },
    actions: {
        getUid() {
            const auth = getAuth()
            const user = auth.currentUser;
            if (user) {
                const uid = user.uid
                return uid
            }
            return
        },

        async register({ email, password, name }) {
            console.log('trying to register')
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

                        console.log('user created')
                    })
            }
            catch (e) {
                console.log('auth.js when register error', e)
                //commit('setError', e)
                throw e
            }
        },

        async login({ email, password }) {
            const auth = getAuth();
            try {
                await signInWithEmailAndPassword(auth, email, password)
                this.getUserInfo()
                // .then((userCredential) => {
                //     const user = userCredential.user
                //})
            }
            catch (e) {
                console.log('auth.js when login error', e)
                //commit('setError', e)
                throw e
            }
        },

        async logout() {
            const auth = getAuth();
            await signOut(auth);
            this.clearInfo();
        },

        async getCurrency(to, from) {
            const key = process.env.VUE_APP_API_P5ENDPOINT_API_KEY
            let myHeaders = new Headers();
            myHeaders.append("apikey", key);
            console.log(key)
            const requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders,
                withCredentials: false,
            };
            const amount = 100
            const res = await fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
            // .then(response => response.text())
            // .then(result => console.log(result))
            // .catch(error => console.log('error', error));
            return res.json()
        },

        setError(state, error) {
            state.error = error
        },

        clearError(state) {
            state.error = null
        },

        setUserInfo(data) {
           this._userInfo = data
           //console.log(this._userInfo.username)
        },

        clearInfo() {
            this._userInfo = {}
        },

        async getUserInfo() {
            try {
                const uid = await this.getUid()
                const db = getDatabase()
                const userInfo = ref(db, '/users/' + uid);
                onValue(userInfo, (snapshot) => {
                    const data = snapshot.val();
                    this.setUserInfo(data);
                });

            } catch (error) {
                console.log(error)
            }

        }
    },

    getters: {
        error: (state) => state.error,
        USER_NAME: (state) => state._userInfo.username,
        USER_BILL: (state) => state._userInfo.bill
    }
})