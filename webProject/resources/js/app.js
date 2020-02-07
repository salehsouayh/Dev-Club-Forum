/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import User from './helpers/User';

window.User = User;
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('app-home', require('./AppHome.vue').default);
Vue.component('pagination', require('laravel-vue-pagination'));


import router from './routes/routes.js';
import firebase from 'firebase';

// Required for side-effects
require("firebase/firestore");


var firebaseConfig = {
    apiKey: "AIzaSyBF-hoqePSA_wniwpN3ax9HAWMNAMm12-E",
    authDomain: "chat-store-58de2.firebaseapp.com",
    databaseURL: "https://chat-store-58de2.firebaseio.com",
    projectId: "chat-store-58de2",
    storageBucket: "chat-store-58de2.appspot.com",
    messagingSenderId: "185578974855",
    appId: "1:185578974855:web:c0ab687fd5f1e4b7371222",
    measurementId: "G-8TPGSXMW6W"
};
// Initialize Firebase


// Initialize Cloud Firestore through Firebase


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

window.db = db;
const auth = firebase.auth();



const app = new Vue({
    el: '#app',
    router
});