import axios from 'axios'
import { createStore } from 'vuex'
import router from './../router/index'

export default createStore({
  state: {
    user: [],
    token: ""
  },
  mutations: {
    authUser (state, userData){
      state.token = userData.token,
      state.user = userData.user
    },
    clearAuth (state) {
      state.token = null
      state.user = null
    },
    onLogout() {
      this.$store.dispatch('logout')
    }
  },
  actions: {
    login ({commit}, authData) {
      axios.post('http://localhost:3000/api/auth/login', {
        email: authData.email,
        password: authData.password
      })
      .then(res => {
        console.log(res)

        commit('authUser', {
          token: res.data.token,
          user: res.data.user
        })
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', res.data.user)
        router.push("/")
      })
      .catch(error => console.log(error))
    },
    logout ({commit}) {
      commit('clearAuth')
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      router.replace('/')
    }
  },
  getters: {
    USER(state) {
      return state.user
    },
    ifAuthenticated (state) {
      return state.token !== null
    }
  },
  modules: {

  }
});
