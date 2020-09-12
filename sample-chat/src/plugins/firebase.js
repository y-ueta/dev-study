import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueFire)

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBXDgN_04yuLKBcOBqzi5fzSqccK404sZs",
    authDomain: "chat-firestore-vue-sampl-a506d.firebaseapp.com",
    databaseURL: "https://chat-firestore-vue-sampl-a506d.firebaseio.com",
    projectId: "chat-firestore-vue-sampl-a506d",
    storageBucket: "chat-firestore-vue-sampl-a506d.appspot.com",
    messagingSenderId: "978077856295",
    appId: "1:978077856295:web:782b9cd378f3dac7ea9402",
    measurementId: "G-JYHEYVNHEG"
});

export const db = firebaseApp.firestore();