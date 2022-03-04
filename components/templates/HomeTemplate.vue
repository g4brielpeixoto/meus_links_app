<template>
  <div class="home">
    <HamburgerMenu class="mobile-header">
      <NuxtLink to="/login">Login</NuxtLink>
      <NuxtLink to="/register">Criar conta</NuxtLink>
    </HamburgerMenu>
    <Header class="desktop-header">
      <FirstButton text="Login" to="/login" />
      <SecondButton text="Criar conta"/>
    </Header>
    <Container>
      <Logo />
      <div class="main-text">
        <Title text="Reúna e compartilhe suas ideias sem dor de cabeça." />
        <SubTitle text="Conecte seu público ao seu conteúdo com apenas um link." />
      </div>
      <MainButton text="Começar agora" />
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'meus_links',
})
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}
.logo {
  width: 24%;
  margin: 0 auto;
}
@include screen('large', 'infinity') {
  .title {
    font-size: 3rem;
    width: 60.15%;
  }

  .subtitle {
    font-size: 1.25rem;
  }

  .container {
    width: 62.5rem;
  }
  
  .main-button {
    font-size: 1.5rem;
  }

  .mobile-header {
    visibility: hidden;
  }
}

@include screen('medium') {
  .title {
    font-size: 2.2rem;
    width: 70%;
  }
  .container {
    margin: 6rem auto;
    width: 37.5rem;
  }

  .subtitle {
    font-size: 0.92rem;
  }

  .main-button {
    font-size: 1rem;
  }
  .mobile-header {
    visibility: hidden;
  }
}

@include screen('small') {
  .title {
    font-size: 1.7rem;
    width: 90%;
  }
  .container {
    margin: 6rem auto;
    width: 400px;
  }

  .logo {
    width: 40%;
    margin: 0 auto;
  }

  .subtitle {
    font-size: 0.7rem;
  }

  .main-button {
    font-size: 0.8rem;
  }

  .desktop-header {
    visibility: hidden;
  }

  .mobile-header {
    visibility: visible;
  }
}

.main-text {
  display: grid;
  margin: 2rem auto;
  grid-gap: 0.7rem;
}

.header {
  justify-content: end;
}

.main-button {
  margin-top: 1rem;
}
</style>
