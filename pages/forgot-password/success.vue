<template>
  <div class="forgot-password-success">
    <Header>
      <Logo />
    </Header>
    <Container>
      <Title text="Confira o seu e-mail." />
      <SubTitle text="Te enviamos um link para cadastrar uma nova senha."/>
      <NuxtLink to="/">
        <MainButton text="Voltar para home" />
      </NuxtLink>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  middleware: 'guest',
  data() {
    return {
      email: ''
    }
  },
})
</script>

<style lang="scss" scoped>
.forgot-password-success {
  .title {
    font-size: 2.8rem;
  }
  .logo {
    width: 9.3rem;
  }
  .header {
    justify-content: start;
  }
  .container {
    grid-gap: 1.5rem;
  }

  @include screen('small') {
    .container {
      width: 16.75rem;
    }
  } 
}
</style>
