<template>
    <h1 class="title" >
      {{ text }}
    </h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.title { 
  text-align: center;
  font-family: Lufga-SemiBold;
  letter-spacing: -1px;
  margin: 0 auto;
}
</style>
