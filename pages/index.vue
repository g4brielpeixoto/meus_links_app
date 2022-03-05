<template>
  <HomeTemplate />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'meus_links',
  middleware: 'guest'
})
</script>
