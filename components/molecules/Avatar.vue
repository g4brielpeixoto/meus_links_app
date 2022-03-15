<template>
  <div class="box" @mouseenter="show = true" @mouseleave="show = false">
    <transition>
      <div v-if="enableChange && show" class="change-avatar" >
        <div>
          <label for="avatar" class="actions update-avatar">Trocar foto</label>
          <input id="avatar" ref="file" type="file" @input="$emit('submited', $event)">
        </div>
        <p class="actions delete-avatar" @click="$emit('delete')">Deletar foto</p>
      </div>
    </transition>
    <img :src="src" :alt="name" class="avatar">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: 'Foto de perfil'
    },
    enableChange: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      show: false
    }
  }
})
</script>

<style lang="scss" scoped>
.avatar {
  width: 8rem;
  border-radius: 5rem;
}

.change-avatar {
  background: rgba(255, 94, 111, 0.85);
  position: absolute;
  width: 8rem;
  height: 8rem;
  border-radius: 5rem;
  color: $white;
  display: grid;
  justify-items: center;
  align-items: center;
  align-content: center;
  grid-gap: 0.7rem;
  input {
    display: none;
  }
  .actions {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    } 
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
