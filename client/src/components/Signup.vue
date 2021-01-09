<template>
    <div class="vue-tempalte">
        <form>
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

            <button type="submit" class="btn btn-dark btn-lg btn-block" v-on:click="createUser()" >Sign Up</button>

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
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
                axios.post('https://store-magic.herokuapp.com/api/auth/register/', this.user)
                .then(function( response ){
                    this.user = response.data;
                    console.log(response.data);
                }.bind(this));
            }
        }
    }
</script>