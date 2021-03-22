<template>
  <div id="app">
    <h1>Diretivas (Desafio)</h1>
    <hr />
    <!-- Exercício -->
    <!-- Escreva uma diretiva que funcione como o v-on (escute eventos) -->
    <button v-quando:click="acao">executar</button>
    <p v-quando:mouseenter="mouseEnter" v-quando:mouseleave="mouseLeave">
      Teste mouse event: {{ m }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      m: "",
      count: 0,
    };
  },
  directives: {
    quando: {
      bind(el, binding) {
        const tipo = binding.arg;
        const fn = binding.value;
        el.addEventListener(tipo, fn);
      },
    },
  },
  methods: {
    acao() {
      alert("acao executada");
    },
    mouseEnter() {
      this.m = "Entrou!";
    },
    mouseLeave() {
      this.m = "Saiu!";
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

button {
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}
</style>
