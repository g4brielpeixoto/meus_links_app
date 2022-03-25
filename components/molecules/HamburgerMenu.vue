<template>
  <header class="header">
    <transition name="background">
      <div v-show="opened" class="background"></div>
    </transition>

    <div id="clickbox">
      <svg 
      v-show="mobile"
      :class="['menu', {'changed': changed}]"
      fill="#00a190"
      viewBox="0 0 24 24"
      @click="toggleMenu">
      <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"/>
      </svg>

      <transition name="menu">
        <div v-show="opened" class="hamburger-menu">
          <nav>
            <img src="../../assets/images/back.svg" class="back" @click="toggleMenu" />
            <slot class="slot" />
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    changed: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      mobile: false,
      opened: false
    }
  },

  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
    window.addEventListener('click', (e) => {	
      if (this.opened && !document.getElementById('clickbox')!.contains(e.target as any)){
        this.opened = false
      }
    })
  },
  methods: {
    onResize() {
      if(window.innerWidth < 600) this.mobile = true
      else this.mobile = false
    },
    toggleMenu() { 
      this.opened = !this.opened
    },
  }
})
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.menu {
  width: 33px;
  position: fixed;
  right: 1.5rem;
  top: 0.9rem;
  cursor: pointer;
  transition: 0.3s;
  z-index: 999;
}


@keyframes changed {
  0% { fill: $pink; }
  100% { fill: $green; }
}
  
.changed {
  -webkit-animation: changed 1s linear infinite;
  -moz-animation: changed 1s linear infinite;
  -ms-animation: changed 1s linear infinite;
  -o-animation: changed 1s linear infinite;
  animation: changed 1s linear infinite;
}

.menu:hover {
  fill: $pink;
}

.back {
  width: 28px;
  cursor: pointer;
}

.hamburger-menu {
  background-color: $green;
  font-size: 24px;
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 999;
  right: 0;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.3);
  nav {
    font-family: Lufga-SemiBold;
    color: $white;
    display: grid;
    justify-items: end;
    grid-gap: 2rem;
    padding: 1.5rem;
  }
}
.menu-enter-active,
.menu-leave-active {
  transition: 0.4s ease all;
}
.menu-enter {
  transform: translateX(250px);
}
.menu-enter-from,
.menu-leave-to {
  transform: translateX(250px);
}

.background-enter-active,
.background-leave-active {
  transition: opacity 0.5s ease;
}

.background-enter-from,
.background-leave-to {
  opacity: 0;
}
</style>
