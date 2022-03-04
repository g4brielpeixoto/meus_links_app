<template>
  <div class="admin-template">
    <HamburgerMenu class="mobile-header">
      <NuxtLink to="/login">Ver Links</NuxtLink>
      <NuxtLink to="/register">Logout</NuxtLink>
    </HamburgerMenu>

    <Header class="desktop-header">
      <FirstButton text="Ver Links" to="/" />
      <SecondButton text="Logout" @click="logout()" />
    </Header>

    <div class="main">
      <AddLink text="+ Adicionar novo link"/>
      <EmptyList v-show="emptyList"/>
      <Draggable :list="list">
        <transition-group class="list" name="flip-list">
          <LinkEditor  
            v-for="link in list"
            :key="link.text"
            :text="link.text"
            :link="link.link"
            :state="link.state"
          />
        </transition-group>
      </Draggable>
    </div> 

  </div>
</template>

<script lang="ts" scoped>
import Vue from 'vue'
import Draggable from 'vuedraggable'

export default Vue.extend({
  components: { Draggable },
  layout: 'meus_links',
  data() {
    return {
      emptyList: false,
      list: [
        { text: 'Facebook', link: 'https://www.facebook.com.br', state: true, dragged: false},
        { text: 'Instagram', link: 'https://www.instagram.com.br', state: true, dragged: false},
        { text: 'Youtube', link: 'https://www.youtube.com.br', state: true, dragged: false}
      ],
    }
  },
  methods: {
    logout() {
      console.log(this.$store.getters.token)
      this.$store.dispatch('auth/logout')
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
