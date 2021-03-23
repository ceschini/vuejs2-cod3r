import Vue from 'vue'
import axios from 'axios'

// registrando de forma global:

// axios.defaults.baseURL = 'https://curso-vue-73de7-default-rtdb.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json' 

Vue.use({
  install(Vue) {
    // Vue.prototype.$http = axios <- global

    // registrando axios localmente nessa instancia
    Vue.prototype.$http = axios.create({
      baseURL: 'https://curso-vue-73de7-default-rtdb.firebaseio.com/',
      headers: {
        get: {
          "Authorization": "abc123"
        },
      }
    })

    // interceptors para modificar o que eh recebido e enviado
    // eh bom quando tu nao curtiu a resposta do servidor e quer 
    // tratar elas antes de enviar para o app
    Vue.prototype.$http.interceptors.request.use(config => {
      console.log(config.method);
      return config
    }, error => Promise.reject(error))

    Vue.prototype.$http.interceptors.response.use(res => {
      // const array = []
      // for (let chave in res.data) {
      //   array.push({ id: chave, ...res.data[chave] })
      // }

      // res.data = array
      return res
    }, error => Promise.reject(error))
  }

})