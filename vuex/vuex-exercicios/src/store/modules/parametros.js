export default {
  state: {
    quantidade: 2,
    preco: 1.99,
  },
  mutations: { // focadas em mudar o state
    setQuantidade(state, payload) {
      state.quantidade = payload
    },
    setPreco(state, payload) {
      state.preco = payload
    }
  },
}