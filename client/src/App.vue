<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-dark rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="/">
          Home
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item" v-if='!auth'>
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item" v-if='!auth'>
            <router-link class="btn btn-outline-primary" to="/signup">Sign up</router-link>
          </li>
          <li  class="nav-item" v-if='auth'>
            <ul class="btn btn-outline-primary" @click="onLogout">Log Out</ul>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      auth () {
        return this.$store.getters.ifAuthenticated
      }
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>