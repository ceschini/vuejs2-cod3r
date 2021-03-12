new Vue({
  el: '#desafio',
  data: {
    valor: ''
  },
  methods: {
    alerta() {
      alert('pei')
    },
    gravarValor(e) {
      this.valor = e.target.value
    },
    entrarValor(e) {
      this.valor = e.target.value
    }
  }
})