<template>
  <div class="citacao">
    <slot name="fonte"></slot>
    <slot name="texto"></slot>
    <slot name="autor"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* eh possivel aplicar estilo no elemento recebido pelo 'slot' 
mas eh mais fraco que o estilo feito pelo componente que chama */
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}
</style>
