import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAGGFc-8_KRqjGb_pvesMhuilSiyKT7yRU",
    authDomain: "idobatakaigi-with-ham-8b011.firebaseapp.com",
    projectId: "idobatakaigi-with-ham-8b011",
    storageBucket: "idobatakaigi-with-ham-8b011.appspot.com",
    messagingSenderId: "19295271203",
    appId: "1:19295271203:web:57a063ce8a4cf3349bf496"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
    messageRef.push({ name, text });

}