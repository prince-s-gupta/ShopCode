
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAiolPHpmLrshIwnFsyKcPoneoKhAe6Dak",
    authDomain: "shopcode-3e231.firebaseapp.com",
    projectId: "shopcode-3e231",
    storageBucket: "shopcode-3e231.appspot.com",
    messagingSenderId: "495922626129",
    appId: "1:495922626129:web:dd6a44c3a90970aac84270",
    measurementId: "G-4R8D4QH04H"
};

const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig