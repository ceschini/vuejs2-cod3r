export default {
  state: {
    produtos: [],
  },
  getters: { // focadas em retornar dados do state, manipulados ou n
    valorTotal(state) {
      return state.produtos
        .map((p) => p.quantidade * p.preco)
        .reduce((total, atual) => total + atual, 0);
    }
  },
  mutations: { // focadas em mudar o state
    adicionarProduto(state, payload) {
      state.produtos.push(payload)
    }
  },
  actions: { // focadas em aplicar alteracoes e regras de negocio
    adicionarProduto(context, payload) {
      setTimeout(() => {
        context.commit('adicionarProduto', payload) // depois de computar, chama a mutation
      }, 1000)
    }
  }
}