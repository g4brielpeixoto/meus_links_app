<template>
  <div class="username-input">
    <img src="../../assets/images/logotipo.svg" class="logotipo" />
    <p>meuslinks.io/</p>
    <input v-model="username" class="input" type="text" name="username" placeholder="apelido" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      username: ''
    }
  },
  watch: {
    username() {
      this.username = this.username.toLowerCase()
      this.$emit('changeUsername', this.username)
    }
  }
})
</script>

<style lang="scss" scoped>
.username-input {
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
  .input {
    background-color: $lightGray;
    width: 100%;
  }
  .input::placeholder {
    color: $darkGray;
  }
  .logotipo {
    width: 17px;
  }
  &-input:focus-within {
    border: solid 2px $black;
  }
}

@include screen('small') {
  .username-input {
    width: 85vw;
  }
}
</style>
