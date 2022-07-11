<template>
  <div class="admin-template">
    <AvatarCropper 
      v-if="showAvatarCropper"
      :show="showAvatarCropper"
      @close="showAvatarCropper = false"
      @imageCropped="showAvatarCropper = false; avatar = imageSource"
    />
    <HamburgerMenu class="mobile-header" :changed="changed">
      
      <MenuItem 
        v-if="changed"
        text="Salvar" 
        :highlight="changed"
        :loading="isSaving"
        icon="save.svg" 
        @click="save()" 
      />
      <MenuItem 
        v-else
        text="Salvo"
        icon="check.svg"
      />
      <MenuItem 
        :to="`/${user.username}`"
        text="Ver página"
        icon="logotipo.svg"
      />
      <MenuItem
        text="Logout"
        icon="logout.svg"
        :loading="isLogouting"
        @click="logout()"
      />
    </HamburgerMenu>

    <Header :class="{'on-top': onTop}">
      <Logo />
      <div class="actions">
        <Save v-if="changed" :loading="isSaving" @save="save()"/>
        <Saved v-else />

        <NuxtLink :to="`/${user.username}`">
          <SecondButton text="Ver Página"/>
        </NuxtLink>

        <SecondButton text="Logout" :loading="isLogouting" @click="logout()"/>
      </div>
    </Header>

    <div class="main">
      <AdminSkeleton v-if="$fetchState.pending"/>

      <div v-else class="content">
        <Avatar
          :user="user"
          :enable-change="true"
          @submitted="uploadAvatar"
          @delete="deleteAvatar"
          @showAvatarCropper="showAvatarCropper = !showAvatarCropper"
        />
        
        <div class="user-info">
          <input  
            v-model="user.name" 
            class="name" 
            name="Nome" 
            type="text" 
            placeholder="Seu nome"
          />
          <SubTitle :text="`@${user.username}`"/>
        </div>
        
        <AddLink text="+ Adicionar novo link" @click="addLink"/>
        <EmptyList v-show="isEmpty"/>
        <Draggable :list="user.links" handle=".handle">
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
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import Draggable from 'vuedraggable'
import { Link } from '@/models'
import { $cookies } from '@/utils/nuxt-instance'

export default Vue.extend({

  components: { Draggable },

  layout: 'meus_links',

  data() {
    return {
      user: {
        name: '',
        username: '',
        links: [] as Array<Link>,
        avatar: '',
        avatarUrl: ''
      },
      changed: false,
      isSaving: false,
      isLogouting: false,
      onTop: true,
      showAvatarCropper: false
    }
  },
  
  async fetch() {
    const user = await this.$axios.$get('/register', {
      headers: {'Authorization': `bearer ${$cookies.get('token')}`}
    })
    if (user)  {
      this.user = user
      if(!this.user.links) this.user.links = []
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

  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    async logout() {
      this.isLogouting = true
      await this.$store.dispatch('auth/logout')
      this.isLogouting = false
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
    },
    
    changeLink(linkToUpdate: Link) {
      this.user.links.forEach((link) => {
        if(link.id === linkToUpdate.id)
          link = linkToUpdate
      })
    },

    async save() {
      const { name, links } = this.user
      this.isSaving = true
      await this.$axios.$put('/register', { name, links }, {
        headers: {'Authorization': `bearer ${$cookies.get('token')}`}
      })
      this.changed = false
      this.isSaving = false
    },

    uploadAvatar(event: any) {
      const formData = new FormData()
      formData.append('file', event.target.files[0])

      const headers = { 
        'Content-Type': 'multipart/form-data', 
        'Authorization': `bearer ${this.$cookies.get('token') }`
      }

      this.$axios.$put('/avatar', formData, { headers })
      .then(({avatar, avatarUrl}) => {

        this.user.avatar = avatar
        this.user.avatarUrl = avatarUrl

      })       
      .catch((error) => {
        this.$notify({
          type: 'error',
          text: error.response.data.errors[0].message,
          duration: 5000, 
        })
      })

    },

    async deleteAvatar() {
      await this.$axios.$delete('/avatar', { 
        headers: { 'Authorization': `bearer ${this.$cookies.get('token') }` }
      })
      this.user.avatar = ''
    },

    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition === 0) {
        this.onTop = true
      }
      else {
        this.onTop = false
      }
    }

  }
})

</script>

<style lang="scss" scoped>
.mobile-header {
  a {
    cursor: pointer;
  }
}

@keyframes changed {
  0% { color: $pink; }
  100% { color: $white; }
}
  
.changed {
  -webkit-animation: changed 1s linear infinite;
  -moz-animation: changed 1s linear infinite;
  -ms-animation: changed 1s linear infinite;
  -o-animation: changed 1s linear infinite;
  animation: changed 1s linear infinite;
}

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
  justify-content: space-between;
  .logo {
    width: 9.3rem;
    margin: auto auto;
  }
}

.main {
  padding-top: 5rem;
}

.content {
  display: grid;
  margin: 0 auto;
  justify-items: center;
  grid-gap: 1.25rem;
  
  .empty-list {
    margin-top: 1.5rem;
  }

}

.list {
  display: grid;
  grid-gap: 1rem
}

.name {
  background-color: $white;
  letter-spacing: -1px;
  font-family: Lufga-Semibold;
  font-size: 1.8rem;
  color: $black;
  transition: 0.25s;
  border-bottom: solid transparent 1px;
  text-align: center;
  margin-bottom: 0.25rem;
  &::placeholder {
    color: $darkGray;
    text-align: center;
  }
  &:focus {
    border-bottom: solid $darkGray 1px;
  }
}

.header {
    height: 4rem;  
    position: fixed;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.2);
    z-index: 5;
    background-color: $white;
    transition: 0.3s;
  }

  .on-top {
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0);
  }

@include screen('small') {
  .header {
    .logo {
      width: 7rem;
    }
  }
  .actions {
    visibility: hidden;
  }
  .on-top {
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0);
  }
  .mobile-header {
    z-index: 6;
  }
}

</style>
