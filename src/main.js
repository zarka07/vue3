import "bootstrap/dist/css/bootstrap.css";
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from '@/router';
import { initializeApp } from "firebase/app";
import Toaster from '@meforma/vue-toaster';
import "bootstrap/dist/js/bootstrap.js";
import { createI18n, useI18n } from 'vue-i18n';
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import { CRMstore } from "@/stores/CRMstore";



require('../public/app.css')
const messages = {
    en: {
        "AppVue": {
            "Language": "Language",
            "ConnectMe": "Get connect with me: ",
            "Vue": "Vue pet project"
        },
        "PostlistVue": {
            "Postlist": "Post list from jsonplaceholder",
            "Next": "Next >",
            "Previous": "< Previous",
        },
        "PostVue": {
            "Post": "post #",
            "Id": "Id",
            "Title": "Title",
            "Body": "Body",
            "Comments": "Comments for ",
            "Name": "Name",
            "Email": "Email",
            "Comment": "Comment",
            "Back": "Back"
        },
        "Loader": "Loading"
        ,
        "Agreement": {
            "ShowAgreement": "Show agreement",
            "NotAgree": "Not agree",
            "Agree": "Agree",
            "Molodec": "Good boy"
        },
        "Errors": {
            "400": "To resume the session, clear the cookies. If the error persists, contact technical support.",
            "403": "Sorry, you cannot view the content.",
            "404": "The requested page does not exist.",
            "405": "Error #:",
            "410": "Sorry, the requested content has been removed.",
            "411": "Error #:",
            "415": "The format of the downloaded media is not supported, please select the appropriate format",
            "416": "Error #:",
            "422": "Validation failed.",
            "500": "Service is not avalible"
        },
        "lang": "en",
        "Where": "Where",
        "What": "What",
        "Who": "Who",
        "AgencyLine": "FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY",
        "FullCycle": "FULL-CYCLE",
        "EventAgency": "EVENT AGENCY",
        "About": "About us"
    },
    ru: {
        "AppVue": {
            "Language": "Язык",
            "ConnectMe": "Напишите мне ",
            "Vue": "Vue учебный проект"
        },
        "PostlistVue": {
            "Postlist": "Список публикаций взят с сайта jsonplaceholder",
            "Next": "Вперед >",
            "Previous": "< Назад",
        },
        "PostVue": {
            "Post": "публикации #",
            "Id": "Номер публикации",
            "Title": "Заголовок",
            "Body": "Содержание",
            "Comments": "Комментарии к",
            "Name": "Имя",
            "Email": "Почта",
            "Comment": "Комментарий",
            "Back": "Назад"
        },
        "Loader": "Загрузка"
        ,
        "Agreement": {
            "ShowAgreement": "Показать лицензионное соглашение",
            "NotAgree": "Не принимаю",
            "Agree": "Принимаю",
            "Molodec": "Молодец"
        },
        "Errors": {
            "400": "Для возобновления сессии выполните очистку файлов Cookies. В случае повтора ошибки – обратитесь в техническую поддержку. ",
            "403": "К сожалению, просмотр содержимого невозможен.",
            "404": "Запрашиваемой страницы не существует.",
            "405": "Ошибка №:",
            "410": "К сожалению, запрашиваемый контент удален",
            "411": "Ошибка №:",
            "415": "Формат загружаемого медиа-содержимого не поддерживается, выберите подходящий формат",
            "416": "Ошибка №:",
            "422": "Проверка данных завершилась неудачно.",
            "500": "Сервис недоступен"

        },
        "lang": "укр",
        "Where": "Де",
        "What": "Що",
        "Who": "Хто",
        "AgencyLine": "АГЕНЦІЯ З ЗАХОДІВ ПОВНОГО ЦИКЛУ АГЕНЦІЯ З ЗАХОДІВ ПОВНОГО ЦИКЛУ",
        "FullCycle": "АГЕНЦІЯ З ЗАХОДІВ",
        "EventAgency": "ПОВНОГО ЦИКЛУ",
        "About": "Про нас"
    }
}

const firebaseConfig = {
    apiKey: "AIzaSyB3yLPA93lzffbhtUzQblaZvpwbWGiRwzc",
    authDomain: "cashnote-55fcb.firebaseapp.com",
    databaseURL: "https://cashnote-55fcb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cashnote-55fcb",
    storageBucket: "cashnote-55fcb.appspot.com",
    messagingSenderId: "130990629709",
    appId: "1:130990629709:web:e4e65e8bf7606be1230d04",
    measurementId: "G-EGYK88QBZM"
};


const i18n = createI18n({
    legacy: false, //if use Composition API
    locale: 'en', // set locale
    fallbackLocale: 'ru', // set fallback locale
    messages,
    globalInjection: true,
})

let app = initializeApp(firebaseConfig)


app = createApp(App, {
    setup() {
        const { $t } = useI18n;
        return { $t }
    }
}).
    use(router).
    use(i18n, { scope: global }).
    use(Toaster, { position: 'bottom' }).
    use(createPinia())
app.mount('#app')

// is deactivated because conflict between main paths exist
// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//       console.log('user exist')

//     router.push({name:'Home'})
//   } else {
//       console.log('user not exist')
//     router.push({name:'Login'})
//   }
// });

export default {
    setup() {
        const crmStore = CRMstore();
        return {
            crmStore,
        };
    },
}
