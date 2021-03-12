new Vue({
  el: '#desafio',
  data: {
    nome: 'lucas',
    idade: 24,
    link_img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih0.redbubble.net%2Fimage.423913528.8519%2Fflat%2C800x800%2C075%2Cf.u1.jpg&f=1&nofb=1',
  },
  methods: {
    randomNumber() {
      return Math.random();
    }
  }
})