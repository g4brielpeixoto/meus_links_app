<template>
  <div class="avatar" @mouseenter="showAvatarChanger = true" @mouseleave="showAvatarChanger = false">
    <transition>
      <div v-if="enableChange && showAvatarChanger" class="change-avatar" >
        <div class="actions" @click="$emit('showAvatarCropper')">
          <img src="@/assets/images/camera.svg" alt="camera-icon" class="camera">
          <p>Alterar foto</p>
          <!-- <label for="avatar" class="actions update-avatar">Trocar foto</label>
          <input id="avatar" ref="file" type="file" @input="$emit('submited', $event)"> -->
        </div>
        <!-- <p v-show="user.avatar" class="actions delete-avatar" @click="$emit('delete')">Deletar foto</p> -->
      </div>
    </transition>
    <img :src="user.avatar ? user.avatarUrl : require('@/assets/images/avatar.png')" :alt="user.name" class="image">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    user: {
      type: Object,
      required: true
    },
    enableChange: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      showAvatarChanger: false,
    }
  }
})
</script>

<style lang="scss" scoped>
.avatar {
  width: 8rem;
  border-radius: 5rem;

  .image {
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
    align-content: center;
    input {
      display: none;
    }
    .actions {
      cursor: pointer;
      display: grid;
      justify-items: center;
      align-content: center;
      .camera {
        width: 3rem;
        height: 3rem;
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
}
</style>
