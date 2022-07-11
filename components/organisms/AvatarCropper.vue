<template>
  <div class="avatar-cropper">
    <transition name="background">
      <div class="background">
        <div id="modal-click-box">
          <div class="modal">
            <button class="close-button" @click="$emit('close')">
              <svg
                id="Capa_1" class="close-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 460.775 460.775" style="enable-background:new 0 0 460.775 460.775;  fill:#F1F1F1;" xml:space="preserve">
                <path
                d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
                </svg>
            </button>
            <div class="image-container">
              <img ref="img" :src=" imageSource ? imageSource : require('@/assets/images/avatar.png')" alt="Foto de perfil" class="image">
            </div>
            <div class="actions">
              <FirstButton text="Alterar Foto" @click="$refs.imageInput.click()"/>
              <FirstButton text="Excluir Foto" />
              <SecondButton text="Salvar" @click="cropImage"/>
              <input ref="imageInput" accept=".jpg, .jpeg, .png" type="file" :style="{ display: 'none' }" @change="fileChanged">
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

  <script lang="ts">
  import Vue from 'vue'
import Cropper from 'cropperjs'

export default Vue.extend({
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      imageSource: '',
      selectedFile: null,
      cropper: null as Cropper | null,
    }
  },
  watch: {
    imageSource() {
      if(this.imageSource)
        this.cropper!.replace(this.imageSource)
    }
  },
  mounted() {
    this.cropper = new Cropper(this.$refs.img as HTMLCanvasElement, {
      aspectRatio: 1, 
      minCropBoxHeight: 256,
      minCropBoxWidth: 256,
      viewMode: 3,
      dragMode: 'move',
      background: false,
      cropBoxMovable: false,
      cropBoxResizable: false,
    })
  },
  methods: {  
    fileChanged(e: any) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        if(e.target)
          this.imageSource = e.target.result as string
      } 
    },
    cropImage() {
      const canvas = this.cropper!.getCroppedCanvas({
        width: 256,
        height: 256,
        imageSmoothingQuality: 'high',
      })
      this.imageSource = canvas.toDataURL()
      this.$emit('imageCropped', this.imageSource)
    }
  },
})
</script>

<style lang="scss" scoped>
.avatar-cropper {
  .background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    display: grid;
    justify-items: center;
    align-items: center;
  }

  .background-enter-active,
  .background-leave-active {
    transition: opacity 0.5s ease;
  }

  .background-enter-from,
  .background-leave-to {
    opacity: 0;
  }

  .modal {
    margin-bottom: 4rem;
    width: 28rem;
    height: 24rem;
    border-radius: 13px;
    background-color: $white;
    display: grid;
    // grid-template-rows: auto 4rem;
    align-items: center;
    justify-items: center;
    padding-bottom: 1rem;
    .close-button {
      position: relative;
      top: 0.5rem;
      right: -12.5rem;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-color: $pink;
      display: grid;
      align-items: center;
      justify-items: center;
      cursor: pointer;
      transition: 0.25s;
      &:hover {
        background-color: $green;
      }
      &:active {
        background-color: $green;
      }
      .close-icon {
        width: 40%;
      }
    }
    .image-container {
      display: grid;
      align-content: center;  
      justify-content: center;
      width: 18rem;
      height: 18rem;
      margin-bottom: 1rem;
      .image {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .actions {
      display: grid;
      grid-auto-flow: column;
      align-content: center;
      justify-content: center;
      grid-gap: 0.5rem;
    }
  }

}
</style>