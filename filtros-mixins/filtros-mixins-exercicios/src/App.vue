<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr />
    <p>{{ usuarioLogado }}</p>
    <p>{{ cpf | cpfFilter | inverter }}</p>
    <p>{{ "marrocos" | upper | inverter }}</p>
    <!-- v-bind tbm aceita filtros -->
    <input type="text" :value="cpf | cpfFilter" />
    <hr />
    <Frutas />
    <hr />
    <div>
      <ul>
        <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="add" />
    </div>
  </div>
</template>

<script>
import FrutasMixin from "./FrutasMixin";
import Frutas from "./Frutas.vue";
import UsuarioMixin from "./UsuarioMixin";

export default {
  components: { Frutas },
  // mixin adiciona os dados de outro arquivo
  // bom para reuso de codigo
  mixins: [FrutasMixin, UsuarioMixin],

  // filtros locais
  filters: {
    cpfFilter(valor) {
      const arr = valor.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    },
  },
  data() {
    return {
      cpf: "60070080090",
      // dentro do componente tem prioridade
      frutas: ["abacate"],
    };
  },
  created() {
    console.log("Created - App");
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

input {
  font-size: 2.5rem;
}
</style>
