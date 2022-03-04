<template>
  <button class="button" @click="$emit('click')">
    {{ text }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    },
  }
})
</script>

<style scoped lang="scss">
.button {
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  padding: 3px 15px;
  border-radius: 15px;
  border: solid $green 2px;
  background-color: $green;
  color: $white;
  transition: 0.25s;
}
.button:hover {
  background-color: $pink;
  border: solid $pink 2px;
}
</style>
