<template>
    <div class="container">
        <div class="col-md-6 mx-auto py-5 mt-5">
            <div class="card my-5">
                <div class="card-header">
                   <h3>Sign Up</h3>
                </div>
                <div class="card-body" id="signup-form">
                    <div class="form-group">
                        <input type="text" placeholder="Last name & First name"
                        v-model="name"
                        class="form-control"
                        >
                    </div>
                    <div class="form-group">
                        <input type="email" required placeholder="Email"
                        v-model="email"
                        class="form-control"
                        >
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Password"
                        v-model="password"
                        class="form-control"
                        >
                    </div>
                    <div class="form-group">
                        <button class="btn-btn-primary" v-on:click="register">
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
    name: 'register',
    data() {
        return {
            name : '',
            email : '',
            password : ''
        };
    },
    created () {
        if(User.isLogged()){
            this.$router.push({name : 'home'});
        }
    },
    methods: {
        register(e){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(user => {
                alert(`account created`);
                },
                err => {
                    alert(err.message);
                }
                )
                e.preventDefault()


            axios.post('/api/users/register',{
                name : this.name,
                email : this.email,
                password : this.password,
            }).then(response => {
                console.log(response.data);
                User.storeUser(JSON.stringify(response.data));
                this.$router.go();
            }).catch(err => console.log(err));

        }
    },
}
</script>
