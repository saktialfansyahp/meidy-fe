import { createStore } from "vuex";
import axios from 'axios';
import router from '@/router';


export default createStore({
  actions: {
    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },
    login({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        // Lakukan permintaan HTTP menggunakan Axios
        axios.post('http://localhost:8000/api/auth/login/', credentials)
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          const user = response.data.data;
          localStorage.setItem('user', JSON.stringify(user));
          commit('setUser', user);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        // Lakukan permintaan HTTP menggunakan Axios
        const token = localStorage.getItem('access_token')
        axios.post('http://localhost:8000/api/auth/logout/')
        .then(response => {
          console.log(response)
          commit('setUser', null);
          localStorage.removeItem('user')
          localStorage.removeItem('access_token')
          router.push('/')
          location.reload()
          resolve();
        })
        .catch(error => {
          reject(error);
          console.log(token)
        });
      });
    }
  },
  getters: {
    getUser: state => state.user
  },
});
