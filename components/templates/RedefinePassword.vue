<template>
  <div class="redefine-password-template">
    <Header>
      <Logo />
    </Header>
    <Container>
      <Title :text="`Olá ${name},`" />
      <SubTitle text="Cadastre sua nova senha" />
      <PasswordInput @changePassword="changePassword"/>
      <form @submit.prevent="redefinePassword()">
        <MainButton text="CADASTRAR" type="submit"/>
      </form>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      key: '',
      name: '',
      password: ''
    }
  },

  async mounted() {
    const { userKey, firstName } = await this.$axios.$get(`/forgot-password/${this.$route.params.key}`)
    this.key = userKey
    this.name = firstName
  },

  methods: {
    async redefinePassword() {
      await this.$axios.$put(`/forgot-password`, { key: this.key, password: this.password })
      this.$router.push('/login')
      this.$notify({
          type: 'success',
          title: 'Nova senha cadastrada!',
          text: 'Pode já fazer o login com a nova senha.',
          duration: 10000
      })
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

.header {
  justify-content: start;
}

.container {
  grid-gap: 0.3rem;
}

.form {
  display: grid;
  grid-gap: 1rem;
}

.title {
  font-size: 2.5rem;
}

.subtitle {
  margin-bottom: 1.3rem;
}

.main-button {
  margin: 1.2rem auto;
}

@include screen('small') {
  .logo {
    width: 8rem;
  }
}
</style>
