new Vue({
  el: '#desafio',
  data: {
    efeito: '',
    classeCSS: 'destaque',
    classeInformada: '',
    ativar: 'false',
    estilo: '',
    largura: 0,
    barrinha: {
      backgroundColor: 'red',
      width: 0 + 'px',
      height: 5 + 'px'
    },
  },
  methods: {
    iniciarEfeito() {
      this.efeito = 'destaque'
      setInterval(() => {
        this.efeito = this.efeito == 'destaque'
          ? 'encolher' : 'destaque'
      }, 2000)
    },
    iniciarProgresso() {
      this.barrinha.border = '5px solid red'
      setInterval(() => {
        this.largura += 0.25
        this.barrinha.width = this.largura + 'px'
      }, 5)
    }
  }
})
