<template>
  <div class="confirm-template">
    <Container>
      <Logo />
      <div class="main-text">
        <Title text="Email confirmado com sucesso!" />
        <SubTitle text="Você já pode fechar essa aba se quiser." />
      </div>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'meus_links',
  async mounted() {
    await this.$axios.$get(`/register/${this.$route.params.key}`)
  }
})
</script>

<style lang="scss" scoped>
.confirm-template {
  width: 100%;
  margin-top: 2rem;
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

  .container {
    width: 62.5rem;
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
