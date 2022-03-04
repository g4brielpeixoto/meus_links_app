<template>
  <button class="button">
    <NuxtLink :to="to">
      {{ text }}
    </NuxtLink>
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
    to: {
      type: String,
      required: true
    }
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
  background-color: transparent;
  color: $green;
  transition: 0.25s;
}
.button:hover {
  color: $white;
  background-color: $pink;
  border: solid $pink 2px;
}
</style>
