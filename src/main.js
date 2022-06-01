import "bootstrap/dist/css/bootstrap.css";
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from '@/router';
import { initializeApp } from "firebase/app";
import Toaster from '@meforma/vue-toaster';
import "bootstrap/dist/js/bootstrap.js";
import { createI18n } from 'vue-i18n/index';

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
        }
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

        }


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
    locale: 'en', // set locale
    fallbackLocale: 'ru', // set fallback locale
    messages,
})

let app = initializeApp(firebaseConfig)

app = createApp(App).
    use(router).
    use(i18n).
    use(Toaster, {position: 'bottom'}).
    use(createPinia())
app.mount('#app')


