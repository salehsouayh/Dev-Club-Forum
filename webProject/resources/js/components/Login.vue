<template>
    <div class="container">
        <div class="col-md-6 mx-auto py-5 mt-5">
            <div class="card my-5">
                <div class="card-header">
                   <h3>Log In</h3>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <input type="email" required placeholder="Email"
                        v-model="email"
                        class="form-control"
                        >
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Mot de passe"
                        v-model="password"
                        class="form-control"
                        >
                    </div>
                    <div class="form-group">
                        <button class="btn-btn-primary" v-on:click="login">
                            Validate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'login',
    data() {
        return {
            email : '',
            password : '',
        }
    },
    created () {
        if(User.isLogged()){
            this.$router.push({name : 'home'});
        }
    },
    methods: {
        login(e){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(user => {
                alert(`your are logged in `);
            },
            err => {
                alert(err.message);
            }
            );
            e.preventDefault();

            axios.post('/api/users/login',{
                email : this.email,
                password : this.password
            }).then(response => {
                console.log(response.data);
                User.storeUser(JSON.stringify(response.data));
                this.$router.go();
            }).catch(err => console.log(err));
        }
    },
}
</script>
