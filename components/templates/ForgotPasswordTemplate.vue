<template>
  <div class="forgot-password-template">
    <Header>
      <Logo />
    </Header>
    <Container>
      <Title text="Qual o seu e-mail cadastrado?" />
      <form class="form" @submit.prevent="forgotPassword()">
        <BaseInput  name="email" type="email" placeholder="E-mail" @changeValue="changeEmail" />
        <MainButton type="submit" text="RECUPERAR SENHA" :loading="loading" />
      </form>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import baseUrl from '@/utils/baseUrl'

export default Vue.extend({
  data() {
    return {
      email: '',
      loading: false
    }
  },
  methods: {
  
    changeEmail(email: string) {
      this.email = email
    },
  
    async forgotPassword() {

      const user = {
        email: this.email,
        redirectUrl: `${baseUrl}/redefine-password`,
      }

      try {
        this.loading = true
        await this.$axios.$post('/forgot-password', user, {
          headers: {
            'Authorization': `bearer ${this.$cookies.get('token')}`
          }
        })

        this.$router.push('/forgot-password/success')

      } catch (error) {

        this.$notify({
          type: 'error',
          text: 'E-mail não cadastrado',
          duration: 5000
        })
      }
      this.loading = false
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

@include screen('small') {
  .logo {
    width: 8rem;
  }
}

</style>
