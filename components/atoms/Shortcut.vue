<template>
  <NuxtLink class="shortcut" :to="to">
    {{ text }}
  </NuxtLink>
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

<style lang="scss" scoped>
.shortcut {
  font-size: 0.8rem;
  color: $darkGray;
  text-align: center;
}
.shortcut:hover {
  text-decoration: underline;  
}
</style>
