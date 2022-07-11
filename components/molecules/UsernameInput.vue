<template>
  <div class="username-input">
    <svg
      xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1"        style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      class="logotipo"
      viewBox="0 0 4515.56 4515.56"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
      <defs>
        <style type="text/css">
          .fil0 {fill: #00a190;}
        </style>
      </defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"/>
        <path class="fil0" d="M2257.78 0.01c306.43,0 598.54,61.16 864.96,171.75 -256.39,18.88 -507.47,126.29 -703.55,322.29l0 -0.07 -506.22 506.22c220.72,-16.59 444.49,16.6 653.12,99.22l229.13 -229.14c225.88,-225.86 593.29,-225.86 819.16,0 225.87,225.87 225.87,593.28 0,819.14l-743.98 743.98c-226.58,226.59 -594.51,224.69 -819.14,0 -52.39,-52.39 -97.46,-117.51 -125.68,-181.64l-388.18 387.98c40.76,61.85 83.15,115.3 137.56,169.7 140.31,140.29 319.02,244.87 524.71,294.51 266.49,64.15 551.99,28.68 797.2,-106.59 89.55,-49.45 173.68,-112.03 249.57,-187.86l743.83 -743.97c205.32,-205.24 313.46,-470.78 324.59,-739.58 128.89,284.08 200.7,599.57 200.7,931.84 0,1246.93 -1010.84,2257.78 -2257.78,2257.78 -331.83,0 -646.94,-71.61 -930.73,-200.19 268.37,-11.4 533.4,-119.49 738.32,-324.41l506.22 -506.21c-220.92,16.46 -444.49,-16.59 -653.11,-99.35l-229.35 229.33c-225.86,225.87 -593.28,225.87 -819.15,0 -225.86,-225.87 -225.86,-593.28 0,-819.15l743.84 -744.17c80.4,-80.35 178.72,-132.01 282.24,-155.19 274.92,-61.53 551.29,82.95 662.58,336.84l388.2 -387.98c-320.79,-486.3 -960.51,-632.54 -1459.47,-357.56 -89.56,49.44 -173.68,111.95 -249.58,187.86l-0.07 -0.06 -743.83 744.15c-195.85,195.85 -303.28,446.61 -322.36,702.71 -110.46,-266.27 -171.53,-558.19 -171.53,-864.4 0,-1246.94 1010.84,-2257.78 2257.78,-2257.78z"/>
      </g>
    </svg>
    <p>meuslinks.io/</p>
    <input v-model="username" class="input" type="text" name="username" placeholder="apelido" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      username: ''
    }
  },
  watch: {
    username() {
      this.username = this.username.toLowerCase()
      this.$emit('changeUsername', this.username)
    }
  }
})
</script>

<style lang="scss" scoped>
.username-input {
  border-radius: 30px;
  background-color: $lightGray;
  width: 28rem;
  padding: 0.75rem 1.7rem;
  transition: 0.5;
  display: grid;
  grid-auto-flow: column;
  align-content: center;
  justify-content: start;
  grid-gap: 4px;
  .input {
    background-color: $lightGray;
    width: 100%;
  }
  .input::placeholder {
    color: $darkGray;
  }
  .logotipo {
    width: 17px;
  }
  &:focus-within {
    border: solid 2px $black;
  }
}

@include screen('small') {
  .username-input {
    width: 85vw;
  }
}
</style>
