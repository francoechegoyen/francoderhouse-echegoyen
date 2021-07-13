import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBScT4WVgqYh0u5Zm7e9o2tP2OoV2Ey8zY",
    authDomain: "coderhouse-reactcommerce.firebaseapp.com",
    projectId: "coderhouse-reactcommerce",
    storageBucket: "coderhouse-reactcommerce.appspot.com",
    messagingSenderId: "313121760970",
    appId: "1:313121760970:web:775fcf9f63a0cb5c177633"
};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();