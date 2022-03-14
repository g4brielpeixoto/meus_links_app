<template>
  <div class="link">
    <a :href="url" target="_blank">{{ title }}</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.link {
  color: $white;
  padding: 1rem;
  border-radius: 3rem;
  text-align: center;
  background-color: $pink;
  width: 25rem;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background-color: $green
  }
}
</style>
