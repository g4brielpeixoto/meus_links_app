<template>
  <div v-if="user.validated" class="page-template">
    <Container class="page-template">
      <Avatar
        :user="user"
        :enable-change="false"
      />
      <Title v-if="user.name" :text="user.name"/>
      <SubTitle :text="`@${user.username}`"/>
      <EmptyList v-if="isEmpty"/>
      <div class="links">
        <Link
          v-for="link in user.links" 
          :key="link.id" 
          :title="link.title" 
          :url="link.url"
        />
      </div>
    </Container>
    <Footer>
      <Logo />
    </Footer>
  </div>
  <NotValidated v-else :username="user.username"/>
</template>

<script lang="ts">
import Vue from 'vue'
import { Link } from '@/models'

export default Vue.extend({
  data() {
    return {
      user: {
        name: '',
        username: '',
        validated: true,
        avatar: '',
        avatarUrl: '',
        links: [] as Array<Link>
      }
    }
  },

  head() {
    return {
      title: (this as any).user.username
    }
  },
  
  computed: {
    isEmpty() {
      if(this.user.links.length === 0)
        return true
      else return false
    }
  },

  async mounted() {
    const user = await this.$axios.$get(`/${this.$route.params.username}`)
    if (user)  {
      this.user = user
    }
  }
})

</script>

<style lang="scss" scoped>
.avatar {
  margin-bottom: 1.5rem;
}

.page-template {
  width: 100%;
}

.header {
  justify-content: end;
}

.title {
  font-size: 1.8rem;
}

.links {
  margin-top: 1.5rem;
  display: grid;
  grid-gap: 0.70rem;
}

.empty-list {
  margin-top: 3rem;
}

.footer {
  justify-content: center;
  .logo {
    width: 9.3rem;
  }
}

@include screen('small') {
  .footer{
    .logo {
      width: 8rem;
    }
  }
}
</style>
