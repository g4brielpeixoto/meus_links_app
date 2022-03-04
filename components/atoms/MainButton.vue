<template>
  <button :type="type" class="main-button">
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
    type: {
      type: String,
      default: 'button'
    }
  }
})
</script>

<style scoped lang="scss">
.main-button {
  font-family: Lufga-ExtraBold;
  text-transform: uppercase;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  padding: 0.6rem 1.2rem;
  border-radius: 40px;
  border: solid $pink 2px;
  background-color: $pink;
  color: $white;
  transition: 0.25s;
}
.main-button:hover {
  border: solid $green 2px;
  background-color: $green;
}
</style>
