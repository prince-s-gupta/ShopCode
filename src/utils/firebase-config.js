import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAlPkBo0A0bebe18dkd6UtDYsk9JDAEzGw",
    authDomain: "shopcode-f2746.firebaseapp.com",
    projectId: "shopcode-f2746",
    storageBucket: "shopcode-f2746.appspot.com",
    messagingSenderId: "924111408121",
    appId: "1:924111408121:web:033d909f37043788e70b28",
    measurementId: "G-GVE8NH40NH"
};
const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig
