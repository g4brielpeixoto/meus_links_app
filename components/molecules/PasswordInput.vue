<template>
  <div class="password-input">
    <input v-model="password" class="input" :type="inputType" name="Senha" placeholder="Senha" >
    <img v-if="showPassword" class="icon" src="../../assets/images/eye.svg" @click="toggleShowPassword"/>
    <img v-else class="icon" src="../../assets/images/cutEye.svg" @click="toggleShowPassword"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      showPassword: false,
      password: ''
    }
  },
  computed: {
    inputType() {
      if(this.showPassword) return 'text'
      return 'password'
    }
  },
  watch: {
    password(){
      this.$emit('changePassword', this.password)
    }
  },
  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword
    }
  }
})
</script>

<style lang="scss" scoped>
.password-input {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
}

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

.icon {
  position: relative;
  right: 2.6rem;
  cursor: pointer;
  width: 20px;
}

@include screen('small') {
  .input {
    width: 85vw;
  }
}


</style>
