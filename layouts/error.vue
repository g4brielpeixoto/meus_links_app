<template>
  <div class="error-page">
    <Container>
      <Header>
        <Logo />
      </Header>
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

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.error-page {
  margin-top: 7rem;

  .logo {
    width: 9.3rem;
  }

  .title {
    margin-bottom: 2rem;
  }

  .image {
    width: 18rem;
    margin-bottom: 2rem;
  }
}
</style>
