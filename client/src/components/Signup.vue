<template>
    <div class="vue-tempalte">
        <form method="post" v-on:submit.prevent="createUser">
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-lg" v-model="user.name" />
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="user.password" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block" >Sign Up</button>

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
    
    export default {
        data() {
            return {
                user: {
                    name: '',
                    email: '',
                    password: ''
                }
            }
        },
         methods: {
            createUser(){
                axios.post('http://localhost:3000/api/auth/register/', this.user)
                .then(function( response ){
                    this.user = response.data;
                    console.warn(response.data);
                }.bind(this));
            }
        }
    }
</script>