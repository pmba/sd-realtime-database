import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDHaAD_JzsmRhQ1aO4g-zni-iwKvIgHXok",
    authDomain: "sistemas-distribuidos-ab7a7.firebaseapp.com",
    projectId: "sistemas-distribuidos-ab7a7",
    storageBucket: "sistemas-distribuidos-ab7a7.appspot.com",
    messagingSenderId: "69217416932",
    appId: "1:69217416932:web:0bc841c676ea4a467b1ef1",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
