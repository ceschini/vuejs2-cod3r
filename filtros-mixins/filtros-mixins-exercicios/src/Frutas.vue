<template>
  <div>
    <h1>{{ global }}</h1>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add" />
  </div>
</template>

<script>
import FrutasMixin from "./FrutasMixin";
import UsuarioMixin from "./UsuarioMixin";

export default {
  mixins: [FrutasMixin, UsuarioMixin],
  created() {
    console.log("Created - Frutas");
  },
};
</script>

<style>
</style>