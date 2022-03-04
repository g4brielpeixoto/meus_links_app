<template>
  <div class="login-template">
    <Header>
      <Logo />
    </Header>
    <Container>
      <Title text="Crie uma conta gratuitamente." />
      <form class="form" @submit.prevent="onSubmit">
        <UsernameInput v-model="username"/>
        <Input v-model="email" name="email" type="email" placeholder="E-mail" />
        <PasswordInput v-model="password"/>
        <MainButton type="submit" text="CRIAR CONTA" />
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
  }
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
