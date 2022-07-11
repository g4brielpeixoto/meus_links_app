<template>
  <button 
    :disabled="loading"
    :class="[{ 'loading': loading }, 'second-button']"
    @click="$emit('click')">

    <ButtonLoading v-show="loading" />
    
    <div class="text">
      {{ text }}
    </div>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped lang="scss">

.second-button {
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  padding: 3px 15px;
  border-radius: 15px;
  border: solid $green 2px;
  background-color: $green;
  color: $white;
  transition: 0.25s;
  
  &:hover {
  background-color: $pink;
  border: solid $pink 2px;
  }

}
.loading {
  .text {
    opacity: 0;
  }
  cursor: progress;
  &:hover {
    border: solid $green 2px;
    background-color: $green;
  }

}
</style>
