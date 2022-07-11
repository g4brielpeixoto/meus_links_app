<template>
  <button
    :disabled="loading"
    :class="[{ 'loading': loading }, 'save']"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
    @click="$emit('save')"
  >

    <ButtonLoading v-show="loading" :color="loadingColor"/>
    <div class="text">
      {{ text }}
    </div>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      text: 'Não salvo',
      loadingColor: '#ff5e6f'
    }
  },
  methods: {
    mouseEnter() {
      this.text = 'Salvar'
      this.loadingColor = '#f1f1f1'
    },
    mouseLeave() {
      this.text = 'Não salvo'
      this.loadingColor = '#ff5e6f'
    }
  }
})
</script>

<style scoped lang="scss">
.save {
  cursor: pointer;
  width: 7rem;
  padding: 3px 15px;
  border-radius: 15px;
  border: solid $pink 2px;
  background-color: transparent;
  color: $pink;
  transition: 0.25s;

  &:hover {
    color: $white;
    background-color: $pink;
    border: solid $pink 2px;
  }
}

.loading {
  cursor: progress;
  .text {
    opacity: 0;
  }
}

.button-loading {
  margin-left: 1.01rem;
}
</style>
