<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light  fixed-top">
            <router-link class="navbar-brand ml-4" :to="home">Dev Club</router-link>
            <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
            <router-link class="navbar-brand ml-4" :to="home">Home</router-link>
                </li>
                <li class="nav-item">
            <router-link class="navbar-brand" :to="signup" v-if="!logged">Sign Up</router-link>
                </li>
                <li class="nav-item">
            <router-link class="navbar-brand" :to="login" v-if="!logged">Sign In</router-link>
                </li>

                <li class="nav-item">
            <router-link class="nav-link" :to="adminPanel" v-if="logged">{{name.toUpperCase()}}</router-link>
                </li>
                <li class="nav-item">
            <router-link class="nav-link" :to="chat" v-if="logged">Chat</router-link>
                </li>
                <li class="nav-item">
            <a class="nav-link"  v-on:click="userlogout" style="cursor:pointer" v-if="logged">
                 Sign Out
                </a>
                </li>
              </ul>
            </div>
          </nav>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'navbar',
    data() {
        return {
            home : '/' ,
            login : '/login',
            signup : '/signup',
            logout : '/logout',
            logged : User.isLogged().logged,
            name : User.isLogged().name,
            adminPanel : '/admin',
            chat : '/chat'
        }
    },
    methods: {
        userlogout(){
            firebase.auth().signOut();

            User.logout();
            this.logged = false;
            this.$router.go();
        }
    },
    }
</script>
