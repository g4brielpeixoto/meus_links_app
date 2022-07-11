<template>
  <div class="menu-item" @click="$emit('click')">
    <ButtonLoading v-show="loading"/>
    <div :class="[{ 'loading': loading }, 'item']">
      <DotNotification  v-show="highlight" />
      <img :src="require(`@/assets/images/${icon}`)" class="icon">
      <NuxtLink v-if="to" :to="to">{{ text }}</NuxtLink>
      <a v-else>{{ text }}</a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import DotNotification from './DotNotification.vue'

export default Vue.extend({
  components: { DotNotification },
  props: {
    to: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    highlight: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.menu-item {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;

  .button-loading {
    margin-left: 60px;
  }
  .icon {
    margin-top: 2px;
    width: 20px;
  }
  .item {
    cursor: pointer;
  }
  .dot-notification {
    margin-top: 7px;
  }

  .loading {
    cursor: progress;
    opacity: 0;
  }
}
</style>