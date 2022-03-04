<template>
  <header class="header">
    <svg
      v-show="mobile"
      class="menu"
      xmlns="http://www.w3.org/2000/svg"
      xml:space="preserve"
      version="1.1"
      style="
        shape-rendering: geometricPrecision;
        text-rendering: geometricPrecision;
        image-rendering: optimizeQuality;
        fill-rule: evenodd;
        clip-rule: evenodd;
      "
      viewBox="0 0 18062.22 18062.22"
      @click="toggleMenu"
    >
      <defs>
        <style type="text/css">
          .menu {
            fill: #00a190;
          }
        </style>
      </defs>
      <g id="Layer_x0020_1">
        <path
          class="menu"
          d="M2203.74 0l13654.74 0c1212.06,0 2203.74,991.68 2203.74,2203.74l0 13654.74c0,1212.06 -991.68,2203.74 -2203.74,2203.74l-13654.74 0c-1212.06,0 -2203.74,-991.68 -2203.74,-2203.74l0 -13654.74c0,-1212.06 991.68,-2203.74 2203.74,-2203.74zm1253.49 12064.99l11147.76 0c659.7,0 1199.45,539.75 1199.45,1199.45l0 0c0,659.7 -539.75,1199.45 -1199.45,1199.45l-11147.76 0c-659.7,0 -1199.45,-539.75 -1199.45,-1199.45l0 0c0,-659.7 539.75,-1199.45 1199.45,-1199.45zm0 -8466.66l11147.76 0c659.7,0 1199.45,539.75 1199.45,1199.45l0 0c0,659.7 -539.75,1199.45 -1199.45,1199.45l-11147.76 0c-659.7,0 -1199.45,-539.75 -1199.45,-1199.45l0 0c0,-659.7 539.75,-1199.45 1199.45,-1199.45zm0 4233.33l11147.76 0c659.7,0 1199.45,539.75 1199.45,1199.45l0 0c0,659.7 -539.75,1199.45 -1199.45,1199.45l-11147.76 0c-659.7,0 -1199.45,-539.75 -1199.45,-1199.45l0 0c0,-659.7 539.75,-1199.45 1199.45,-1199.45z"
        />
      </g>
    </svg>
    <transition>
      <div v-show="opened" class="hamburger-menu">
        <nav>
          <img src="@/assets/images/back.svg" class="back" @click="toggleMenu" />
          <slot class="slot" />
        </nav>
      </div>
    </transition>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      mobile: false,
      opened: false
    }
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('resize', this.checkScreenSize())
  },
  methods: {
    toggleMenu() {
      this.opened = !this.opened
    },
    checkScreenSize(): any {
      if (window.innerWidth <= 800) this.mobile = true
      else this.mobile = false
    }
  }
})
</script>

<style lang="scss" scoped>
.menu {
  width: 28px;
  position: fixed;
  right: 1.5rem;
  top: 1.5rem;
  cursor: pointer;
  transition: 0.3s;
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
.v-enter-active,
.v-leave-active {
  transition: 0.4s ease all;
}
.v-enter {
  transform: translateX(250px);
}
.v-enter-from,
.v-leave-to {
  transform: translateX(250px);
}
</style>
