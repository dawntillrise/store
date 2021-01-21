<template>
    <div class="vue-tempalte">
         <div class="vertical-center">
        <div class="inner-block">
        <form method="post" v-on:submit.prevent="loginUser">
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="user.password" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>

        </form>
        </div>
      </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                }
            }
        },
         methods: {
             
            loginUser(){
                this.$store.dispatch('login', this.user)
            }
        }
        
    }
</script>