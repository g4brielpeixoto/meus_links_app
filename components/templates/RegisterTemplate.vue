<template>
  <div class="register-template">
    <Header>
      <Logo />
    </Header>
    <Container>
      <Title text="Crie uma conta gratuitamente." />
      <form class="form" @submit.prevent="register()">
        <UsernameInput @changeUsername="changeUsername"/>
        <BaseInput  name="email" type="email" placeholder="E-mail" @changeValue="changeEmail" />
        <PasswordInput @changePassword="changePassword"/>
        <MainButton type="submit" text="CRIAR CONTA" />
        <Shortcut text="Já tem uma conta?" to="/login"/>
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
      email: '',
      password: ''
    }
  },
  methods: {
    changeUsername(username: string) {
      this.username = username
    },
    changeEmail(email: string) {
      this.email = email
    },
    changePassword(password: string) {
      this.password = password
    },
    async register() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password,
        redirectUrl: 'http://localhost:3000/confirm',
      }

      await this.$store.dispatch('register', user)
      this.$notify({
        type: 'success',
        text: 'Bem-vindo ao Meus Links! Verifique seu email para ativar sua conta!',
        duration: 10000
      })
    }
  },
})
</script>

<style lang="scss" scoped>
.logo {
  width: 9.3rem;
}
.header {
  justify-content: start;
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
