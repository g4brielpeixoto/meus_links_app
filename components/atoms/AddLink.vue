<template>
  <button :type="type" class="add-link" @click="$emit('click')">
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
    to: {
      type: String,
      default: '/'
    },
    type: {
      type: String,
      default: 'button'
    }
  }
})
</script>

<style scoped lang="scss">
.add-link {
  font-family: Lufga-ExtraBold;
  letter-spacing: 0.1rem;
  cursor: pointer;
  width: 28rem;
  height: fit-content;
  padding: 0.7rem 0;
  border-radius: 40px;
  border: solid $pink 2px;
  background-color: $pink;
  color: $white;
  transition: 0.25s;
}
.add-link:hover {
  border: solid $green 2px;
  background-color: $green;
}

@include screen('small') {
    .add-link {
      width: 85vw;
    }
  }
</style>
