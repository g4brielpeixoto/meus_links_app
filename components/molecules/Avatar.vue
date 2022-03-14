<template>
  <img src="@/assets/images/avatar.png" :alt="name" class="avatar">
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    src: {
      type: String,
      default: '@/assets/images/avatar.png'
    },
    name: {
      type: String,
      default: 'Foto de perfil'
    }
  }
})
</script>

<style lang="scss" scoped>
.avatar {
  width: 8rem;
  border-radius: 5rem;
}
</style>
