<template>
  <button class="button" @mouseenter="text = 'Salvar'" @mouseleave="text = 'Não salvo'" @click="$emit('save')">
    {{ text }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      text: 'Não salvo'
    }
  }
})
</script>

<style scoped lang="scss">
.button {
  cursor: pointer;
  width: 7rem;
  padding: 3px 15px;
  border-radius: 15px;
  border: solid $pink 2px;
  background-color: transparent;
  color: $pink;
  transition: 0.25s;
}
.button:hover {
  color: $white;
  background-color: $pink;
  border: solid $pink 2px;
}
</style>
