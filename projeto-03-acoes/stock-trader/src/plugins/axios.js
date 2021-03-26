import Vue from 'vue'
import axios from 'axios'

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'https://stock-trader-project-4a1ee-default-rtdb.firebaseio.com/',
    })
  }
})