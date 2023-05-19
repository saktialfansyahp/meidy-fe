import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'
import axios from 'axios';


axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('access_token');

const app = createApp(App)

app.use(store);
app.use(router)

app.mount('#app')
