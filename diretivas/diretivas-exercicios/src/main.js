import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// declarando diretiva personalizada globalmente
Vue.directive('destaque', {
  // hook chamado quando a diretiva eh atrelada ao elemento
  bind(el, binding, vnode) {
    let atraso = 0
    if (binding.modifiers['atrasar']) {
      atraso = 3000
    }

    setTimeout(() => {
      if (binding.arg === 'fundo') {
        // recebendo valor passado por parametro
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }, atraso)
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')