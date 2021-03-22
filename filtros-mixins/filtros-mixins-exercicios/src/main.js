import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// filtros = funcoes que recebem um valor e o retornam transformado
// filtro global
Vue.filter('inverter', function (valor) {
  return valor.split('').reverse().join('')
})

Vue.filter('upper', function (valor) {
  return valor.toUpperCase()
})

Vue.mixin({
  data() {
    return {
      global: 'Estou no Mixin Global!'
    }
  },
  created() {
    console.log('Created - Mixin Global');
  }
})
new Vue({
  render: h => h(App)
}).$mount('#app')
