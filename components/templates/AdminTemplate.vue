<template>
  <div class="admin-template">
    <!-- <HamburgerMenu class="mobile-header">
      <NuxtLink to="/login">Ver Links</NuxtLink>
      <NuxtLink to="/register">Logout</NuxtLink>
    </HamburgerMenu> -->

    <Header class="desktop-header">
      <Save v-if="changed" @save="save()"/>
      <Saved v-else />
      <SecondButton text="Logout" @click="logout()" />
    </Header>

    <div class="main">
      <Avatar />
      <div class="user-info">
        <input  
          v-model="user.name" 
          class="name" 
          name="Nome" 
          type="text" 
          placeholder="Como quer ser chamado?"
        />
        <SubTitle :text="`@${user.username}`"/>
      </div>
      <AddLink text="+ Adicionar novo link" @click="addLink"/>
      <EmptyList v-show="isEmpty"/>
      <Draggable :list="user.links">
        <transition-group class="list" name="flip-list">
          <LinkEditor  
            v-for="link in user.links"
            :key="link.id"
            :link-prop="link"
            @delete="deleteLink(link)"
            @changed="changeLink"
          />
        </transition-group>
      </Draggable>
    </div> 

  </div>
</template>

<script lang="ts" scoped>
import Vue from 'vue'
import Draggable from 'vuedraggable'
import { Link } from '@/Models'
import { $cookies } from '@/utils/nuxt-instance'

export default Vue.extend({

  components: { Draggable },

  layout: 'meus_links',

  data() {
    return {
      user: {
        name: '',
        username: '',
        links: [] as Array<Link>
      },
      changed: false
    }
  },

  computed: {
    isEmpty() {
      if (this.user.links.length === 0) return true
      else return false
    }
  },

  watch: {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    'user.name'(value, oldValue) {
      if(!oldValue) this.changed = false
        else this.changed = true
    },
    'user.links': {
      handler (value, oldValue) {
        if(oldValue.length === 0) this.changed = false
          else this.changed = true
      },
      deep: true
    }
  },
  
  async mounted() {
    const user = await this.$axios.$get('/register', {
      headers: {'Authorization': `bearer ${$cookies.get('token')}`}
    })
    if (user)  {
      this.user = user
    }
  },

  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    },

    addLink() {
      this.user.links.push({
        id: new Date().getTime(),
        title: '',
        url: '',
        active: false
      })
    },

    deleteLink(linkToDelete: Link) {
      this.user.links = this.user.links.filter((link) => link.id !== linkToDelete.id)
      // this.save()
    },
    
    changeLink(linkToUpdate: Link) {
      this.user.links.forEach((link) => {
        if(link.id === linkToUpdate.id)
          link = linkToUpdate
      })
      // this.save()
    },

    async save() {     
      const { name, links } = this.user
      await this.$axios.$put('/register', { name, links }, {
        headers: {'Authorization': `bearer ${$cookies.get('token')}`}
      })
      this.changed = false
    },

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
  grid-gap: 1.25rem;
  
  .empty-list {
    margin-top: 5rem;
  }

}

.list {
  display: grid;
  grid-gap: 1rem
}

.name {
  background-color: $white;
  font-family: Lufga-Semibold;
  font-size: 1.8rem;
  color: $black;
  transition: 0.25s;
  padding-bottom: 0.1rem;
  border-bottom: solid transparent 1px;
  text-align: center;
  &::placeholder {
    color: $darkGray;
    text-align: center;
  }
  &:focus {
    border-bottom: solid $darkGray 1px;
  }
}

@include screen('large', 'infinity') {

}

@include screen('medium') {
  
}

@include screen('small') {
  
}

</style>
