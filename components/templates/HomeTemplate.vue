<template>
  <div class="home">
    <HamburgerMenu class="mobile-header">
      <NuxtLink to="/login">Login</NuxtLink>
      <NuxtLink to="/register">Criar conta</NuxtLink>
    </HamburgerMenu>
    <Header class="desktop-header">
      <NuxtLink to="/login">
        <FirstButton text="Login"/>
      </NuxtLink>
      <NuxtLink to="/register">
        <SecondButton text="Criar conta"/>
      </NuxtLink>
    </Header>
    <Container>
      <Logo />
      <div class="main-text">
        <Title text="Reúna e compartilhe suas ideias sem dor de cabeça." />
        <SubTitle text="Conecte seu público ao seu conteúdo com apenas um link." />
      </div>
      <NuxtLink to="/register">
        <MainButton text="Começar agora" />
      </NuxtLink>
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
  width: 16rem;
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

  .logo {
    width: 12rem;
  }

  .subtitle {
    font-size: 0.92rem;
  }

  .main-button {
    font-size: 1rem;
  }

}

@include screen('small') {
  .title {
    padding: 0 1rem;
    font-size: 1.8rem;
    width: 19rem;
    text-align: left;
  }
  .container {
    margin: 6rem auto;
    width: 19rem;
  }

  .logo {
    width: 10rem;
  }

  .subtitle {
    display: none;
  }

  .main-button {
    font-size: 0.8rem;
  }

  .desktop-header {
    visibility: hidden;
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
