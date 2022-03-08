<template>
  <div class="admin-template">
    <!-- <HamburgerMenu class="mobile-header">
      <NuxtLink to="/login">Ver Links</NuxtLink>
      <NuxtLink to="/register">Logout</NuxtLink>
    </HamburgerMenu> -->

    <Header class="desktop-header">
      <FirstButton text="Ver Links" to="/" />
      <SecondButton text="Logout" @click="logout()" />
    </Header>

    <div class="main">
      <AddLink text="+ Adicionar novo link" @click="addLink"/>
      <EmptyList v-if="isEmpty"/>
      <Draggable :list="user.links">
        <transition-group class="list" name="flip-list">
          <LinkEditor  
            v-for="link in user.links"
            :key="link.id"
            :link-prop="link"
            @delete="deleteLink(link)"
            @change="changeLink"
          />
        </transition-group>
      </Draggable>
    </div> 

  </div>
</template>

<script lang="ts" scoped>
import Vue from 'vue'
import Draggable from 'vuedraggable'
import { User, Link } from '@/Models'
import { $cookies } from '@/utils/nuxt-instance'

export default Vue.extend({
  components: { Draggable },
  layout: 'meus_links',
  data() {
    return {
      user: {} as User,
      isEmpty: false
    }
  },
  async mounted() {
    const user = await this.$axios.$get('/register', {
      headers: {'Authorization': `bearer ${$cookies.get('token')}`}
    })
    if (user)  {
      this.user = user
      this.listIsEmpty()
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    },

    listIsEmpty() {
      if(this.user.links.length === 0)
        this.isEmpty = true
      else this.isEmpty = false
    },

    addLink() {
      this.user.links.push({
        id: new Date().getTime(),
        title: '',
        url: '',
        active: false
      })
      this.listIsEmpty()
    },

    deleteLink(linkToDelete: Link) {
      this.user.links = this.user.links.filter((link) => link.id !== linkToDelete.id)
      this.listIsEmpty()
      this.save()
    },
    
    changeLink(linkToUpdate: Link) {
      this.user.links.forEach((link) => {
        if(link.id === linkToUpdate.id)
          link = linkToUpdate
      })
      this.save()
    },

    async save() {
      try {
        const { name, links } = this.user
        await this.$axios.$put('/register', { name, links }, {
          headers: {'Authorization': `bearer ${$cookies.get('token')}`}
        })        
      } catch (error) {
        console.log(error)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.flip-list-move {
  transition: transform 0.3s;
}
.none-move {
  transition: transform 0s;
}

.admin-template {
  width: 100%;
}

.header {
  justify-content: end;
}

.main {
  display: grid;
  margin: 1rem auto;
  justify-items: center;
  .empty-list {
    margin-top: 5rem;
  }

  .add-link {
    margin-bottom: 2rem;
  }

}

.list {
  display: grid;
  grid-gap: 1rem;
}

@include screen('large', 'infinity') {

}

@include screen('medium') {
  
}

@include screen('small') {
  
}

</style>
