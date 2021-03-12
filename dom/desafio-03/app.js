new Vue({
  el: '#desafio',
  data: {
    valor: 0
  },
  computed: {
    resultado() {
      return this.valor == 37 ? 'Valor igual' : 'Valor diferente'
    }
  },
  watch: {
    // observando funcao computada O.o
    // soh dispara quando resultado() == true!!
    resultado() {
      console.log('watcher fired');
      setTimeout(() => {
        this.valor = 0
      }, 5000)
    }
  }
});