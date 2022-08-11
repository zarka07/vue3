import axios from 'axios'
export default {
    methods: {
        async register(formData) {
            axios.defaults.headers.post["Content-Type"] = "application/json";
            axios.defaults.headers.common["app-key"] =
                "i4vt213pn5o0nek24kmtlpmxfynpg6y086qudpyswsvdaqla94d4j8eim47k7886";
            return await axios
                .post("/user/sign-up", {
                    login: formData.login,
                    password: formData.password,
                    fullname: formData.fullname,
                })
        },
        async login(formData) {
            axios.defaults.headers.post["Content-Type"] = "application/json";
            axios.defaults.headers.common["app-key"] =
                "i4vt213pn5o0nek24kmtlpmxfynpg6y086qudpyswsvdaqla94d4j8eim47k7886";
            return await axios
                .post("/user/login", {
                    login: formData.login,
                    password: formData.password,
                })
        },
        async getUserInfo(data) {
            axios.defaults.headers.post["Content-Type"] = "application/json";
            axios.defaults.headers.common["access-token"] =
                data.access_token;
            return await axios
                .get("/user/me")
        }
    }
}