<template>
  <input v-model="value" class="input" :type="type" :name="name" :placeholder="placeholder" >
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      value: ''
    }
  },
  watch: {
    value() {
      this.$emit('changeValue', this.value)
    }
  }
})
</script>

<style lang="scss" scoped>
.input {
  border-radius: 30px;
  background-color: $lightGray;
  width: 28rem;
  padding: 0.75rem 1.7rem;
  transition: 0.5;
  display: grid;
  grid-auto-flow: column;
  align-content: center;
  justify-content: start;
  grid-gap: 4px;
  background-color: $lightGray;
  &::placeholder {
      color: $darkGray;
    }
  &:focus {
    border: solid 2px $black;
  }
}
@include screen('small') {
  .input {
    width: 85vw;
  }
}
</style>
