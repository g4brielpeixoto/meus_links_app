<template>
  <div class="not-validated">
    <Container>
      <Logo />
      <Title text="Usuário não verificado."/>
      <SubTitle
        :text="`@${username} ainda não validou seu cadastro, 
        para fazer isso basta clicar no link enviado por e-mail.`"/>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    username: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.not-validated {
  margin-top: 4rem;
  display: grid;

  .logo {
    width: 12rem;
    margin-bottom: 2rem;
  }

  .title {
    margin-bottom: 0.5rem;
  }

  .subtitle {
    width: 25rem;
  }
}
</style>
