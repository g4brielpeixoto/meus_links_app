<template>
  <div class="avatar-cropper">
    <div class="avatar-cropper__container">
      <div class="avatar-cropper__container__image">
        <img :src="image" />
      </div>
      <div class="avatar-cropper__container__cropper">
        <div class="avatar-cropper__container__cropper__canvas">
          <canvas ref="canvas" />
        </div>
        <div class="avatar-cropper__container__cropper__buttons">
          <button class="avatar-cropper__container__cropper__buttons__button" @click="crop">Crop</button>
          <button class="avatar-cropper__container__cropper__buttons__button" @click="cancel">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>

<style>

</style>