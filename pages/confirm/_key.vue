<template>
  <ConfirmTemplate />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'meus_links',
  mounted() {
    this.$axios.$get(`/register/${this.$route.params.key}`)
  }
})
</script>
