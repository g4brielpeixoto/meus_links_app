<template>
  <div class="login-template">
    <Header>
      <Logo />
    </Header>
    <Container>
      <Title text="Entre com sua conta." />
      <form class="form" @submit.prevent="login()">
        <UsernameInput @changeUsername="changeUsername"/>
        <PasswordInput @changePassword="changePassword"/>
        <MainButton type="submit" text="ENTRAR" />
        <Shortcut  text="Esqueceu a senha?" to="/forgot-password"/>
      </form>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('auth/login', { username: this.username, password: this.password })      
        this.$router.push('/admin')
      } catch (error) {
        this.$notify({
          type: 'error',
          text: 'Apelido ou senha inválidos!',
          duration: 5000
        })
      }
    },
    changeUsername(username: string) {
      this.username = username
    },
    changePassword(password: string) {
      this.password = password
    }
  }
})
</script>

<style lang="scss" scoped>
.logo {
  width: 9.3rem;
}
.container {
  grid-gap: 1.5rem;
}
.form {
  display: grid;
  grid-gap: 1rem;
}
.main-button {
  margin: 1rem auto;
}
</style>
