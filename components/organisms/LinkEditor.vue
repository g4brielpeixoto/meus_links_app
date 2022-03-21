<template>
  <div class="link-editor">
    <img class="handle" src="../../assets/images/three-dots-vertical.svg">
    <div class="inputs">
      <input  
        v-model="link.title" 
        class="input text" 
        name="Texto" 
        type="text" 
        placeholder="Título" 
        @blur="$emit('changed', link)"
      />
      <input 
        v-model="link.url" 
        class="input link" 
        name="Link" 
        type="text" 
        placeholder="Link" 
        @blur="validateLink"
      />
    </div>
    <div class="actions">
      <Switcher :state="link.active" @toggleState="toggleState()"/>
      <button class="button-trash" @click="$emit('delete')">
        <svg class="trash" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" width="30px" height="30px">
          <g id="surface75143999">
            <path style="stroke:none;fill-rule:nonzero;" d="M 13 3 C 12.734375 2.996094 12.472656 3.101562 12.285156 3.289062 C 12.09375 3.476562 11.988281 3.730469 11.984375 4 L 6 4 C 5.640625 3.996094 5.304688 4.183594 5.121094 4.496094 C 4.941406 4.808594 4.941406 5.191406 5.121094 5.503906 C 5.304688 5.816406 5.640625 6.003906 6 6 L 24 6 C 24.359375 6.003906 24.695312 5.816406 24.878906 5.503906 C 25.058594 5.191406 25.058594 4.808594 24.878906 4.496094 C 24.695312 4.183594 24.359375 3.996094 24 4 L 18.015625 4 C 18.011719 3.730469 17.90625 3.476562 17.714844 3.289062 C 17.527344 3.101562 17.265625 2.996094 17 3 Z M 6 8 L 6 24 C 6 25.105469 6.894531 26 8 26 L 22 26 C 23.105469 26 24 25.105469 24 24 L 24 8 Z M 6 8 " fill="#7a7a7a"/>
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Link } from '@/Models'

export default Vue.extend({
  props: {
    linkProp: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      link: this.linkProp as Link
    }
  },
  methods: {
    toggleState() {
      this.link.active = !this.link.active
      this.$emit('changed', this.link)
    },
    validateLink() {
      if(this.link.url) {
        const startOfUrl = this.link.url.substring(0, 8)
        if (startOfUrl.search(/^http[s]?:\/\//)) {
          this.link.url = 'https://' + this.link.url
        }
  
        this.$emit('changed', this.link)
      }
    },
  }
})
</script>

<style lang="scss" scoped>
.link-editor {
  padding: 1rem;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1.9rem auto 2rem;
  align-items: center;
  background-color: $lightGray;
  width: 28rem;

  .handle {
    width: 22px;
    cursor: grab;
  }

  .inputs {
    display: grid;
    grid-gap: 0.5rem;
    width: 100%;
    .input {
      margin-right: 1rem;
      background-color: $lightGray;
      width: 96%; 
      font-size: 14px;
      color: #4e4e4e;
      transition: 0.25s;
      padding: 0.2rem;
      border-bottom: solid transparent 1px;
    }
    .input:placeholder {
      color: $darkGray;
    }
    .input:focus {
      border-bottom: solid $darkGray 1px;
    }
    .text {
      font-family: Lufga-Semibold;
    }
  }

  .actions {
    display: grid;
    grid-gap: 0.5rem;
    align-items: center;
    justify-items: center;
    .button-trash {
      background: $lightGray;
      .trash {
        width: 1.2rem;
        cursor: pointer;
        path {
          transition: 0.3s;
        }
      }
      .trash:hover path{
        fill: red;
      }
    }
  }
}

@include screen('small') {
  .link-editor {
    width: 85vw;
  }
}
</style>
