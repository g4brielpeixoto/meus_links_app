<template>
  <div v-if="user.validated" class="page-template">
    <Container class="page-template">
      <PageSkeleton v-if="$fetchState.pending"/>
      <div v-else class="content">
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
import { Link } from '@/Models'

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

  async fetch() {
    const user = await this.$axios.$get(`/${this.$route.params.username}`)
    if (user)  {
      this.user = user
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
  }
})

</script>

<style lang="scss" scoped>
.page-template {
  width: 100%;
  .content {
    display: grid;
    justify-items: center;
    .avatar {
      margin-bottom: 1.5rem;
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
  }
  .footer {
    justify-content: center;
    .logo {
      width: 9.3rem;
    }
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
