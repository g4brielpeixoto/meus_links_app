<template>
  <div class="error-page">
    <Header>
      <Logo />
    </Header>
    <Container>
      <Title text="Página não encontrada"/>
      <img :src="require('@/assets/images/erro-404.png')" class="image">
      <NuxtLink to="/">
        <MainButton text="Voltar para home" />
      </NuxtLink>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default'
})
</script>

<style lang="scss" scoped>
.error-page {
  .container {
    margin: 1rem;
  }

  .logo {
    width: 9.3rem;
  }

  .title {
    margin-bottom: 2rem;
    padding: 0 2rem;
  }

  .image {
    width: 18rem;
    margin-bottom: 2rem;
  }

  @include screen('small') {
    .image {
      width: 15rem;
    }
  } 
}
</style>
