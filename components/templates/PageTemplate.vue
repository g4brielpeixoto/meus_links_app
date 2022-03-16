<template>
  <div class="page-template">
    <Container class="page-template">
      <Avatar
        :src="user.avatar ? user.avatarUrl : require('@/assets/images/avatar.png')" 
        :name="user.name" 
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
</template>

<script lang="ts" scoped>
import Vue from 'vue'
import { Link } from '@/Models'

export default Vue.extend({
  data() {
    return {
      user: {
        name: '',
        username: '',
        validate: true,
        avatar: '',
        avatarUrl: '',
        links: [] as Array<Link>
      }
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
</style>
