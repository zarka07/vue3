import { defineStore } from 'pinia';
import { getDatabase, ref, set, onValue, child, push, update } from "firebase/database"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"

export const CRMstore = defineStore('crmstore', {
    state: () => {
        return {
            _userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
            currencyInfo: {},
            categoryKey: '',
            categories: [],
            userUid: localStorage.getItem('uid') || '',
            sensor:null
        }
    },
    actions: {
        isUserLogged() {
            if (Object.prototype.hasOwnProperty.call(this._userInfo, 'email') && Object.prototype.hasOwnProperty.call(this._userInfo, 'username')) {
                return true
            } else {
                this.$toast.error("You must log in!")
                return false
            }
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
                throw e
            }
        },

        async login({ email, password }) {
            const auth = getAuth();
            try {
                await signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        const db = getDatabase()
                        localStorage.setItem('uid', user.uid)
                        const userInfo = ref(db, '/users/' + user.uid)
                        onValue(userInfo, (snapshot) => {
                            let data = snapshot.val();
                            localStorage.setItem("userInfo", JSON.stringify(data))
                            // if (data.categories) {
                            //     localStorage.setItem("categories", JSON.stringify(data.categories))
                            // }
                            this._userInfo = data
                        });
                    })
                await this.fetchCategories();
                return 1
            }
            catch (e) {
                console.log(e.message)
                localStorage.clear()
                throw e
            }
        },

        async logout() {
            const auth = getAuth();
            await signOut(auth).then(() => {
                this.clearInfo();
            }).catch((e) => {
                this.$toast.error(e)
            })

        },

        async fetchCategories() {
            const db = getDatabase();
            this.categoryKey = push(child(ref(db, '/users/'), 'categories')).key;
            console.log(this.categoryKey)
            const categories = ref(db, '/users/' + this.userUid + '/categories/');
            let result = {}
            onValue(categories, (snapshot) => {
                if (snapshot.exists()) {
                    let categories = snapshot.val() || {}
                    result = Object.keys(categories).map(key => ({ ...categories[key], id: key }))
                    localStorage.setItem('categories', JSON.stringify(result))
                    console.log(result)
                }
            })
            //this.categories = result
            //return result
        },

        async setNewCategory(data) {
            const uid = this.userUid
            const db = getDatabase();
            this.categoryKey = push(child(ref(db, '/users/'), 'categories')).key;
            const newCategory = {
                categoryLimit: data.limit,
                categoryName: data.name,
                id: this.categoryKey
            };
            const updates = {};
            updates['users/' + uid + '/categories/' + this.categoryKey + '/'] = newCategory;
            update(ref(db), updates);
            this.fetchCategories();
            return { newCategory }
        },

        async updateCategory(data) {
            try {
                const db = getDatabase();
                const updates = {};
                updates['users/' + this.userUid + '/categories/' + data.id] = data;
                update(ref(db), updates);
            } catch (e) {
                this.$toast.error(e.message)
                throw e
            }
        },

        async createRecord(data) {
            let { selectedCategoryId, type, summ, description, date } = data
            const db = getDatabase();
            const uid = this.userUid;
            const newRecord = {
                selectedCategoryId: selectedCategoryId,
                type: type,
                summ: summ,
                description: description,
                date: date,
            }
            const newPostKey = push(child(ref(db), 'users/' + uid)).key;

            const updates = {};
            updates[`users/${uid}/categories/${selectedCategoryId}/${type}-${date}/${newPostKey}/`] = newRecord;
            update(ref(db), updates);
            return type
        },

        async updateUserInfo(data) {
            console.log(data)
            const auth = getAuth();
            console.log(auth.currentUser)
            updateProfile(auth.currentUser, {
                bill: data,
            })

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
            this._userInfo = {}
            this.categoryKey =''
            this.userUid = ''
            //this.$reset()
            localStorage.clear()
        },

    },

    getters: {
        GET_USER_BILL: (state) => state._userInfo.bill,
        GET_USER_CATEGORIES: (state) => state.categories||'',
        GET_CURRENCY_INFO: (state) => state.currencyInfo,
        GET_USER_INFO: (state) => state._userInfo||{},
    }
})