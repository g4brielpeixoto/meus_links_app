<template>
  <div class="button-loading">
    <div class="button-loading-dot" :style="'background-color:' + color"></div>
    <div class="button-loading-dot" :style="'background-color:' + color"></div>
    <div class="button-loading-dot" :style="'background-color:' + color"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    color: {
      type: String,
      default: '#f1f1f1'
    }
  }
})
</script>

<style>
:root {
  --sk-size: 30px;
}

.sk-center { margin: auto; }

.button-loading {
  margin-top: 3px;
  position: absolute;
  width: calc(var(--sk-size) * 1.3);
  height: calc(var(--sk-size) * 1.3);
  display: flex;
  justify-content: space-between;
}

.button-loading-dot {
  width: 25%;
  height: 25%;
  border-radius: 50%;
  animation: button-loading 1.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite both;
}

.button-loading-dot:nth-child(1) { animation-delay: -0.30s; }
.button-loading-dot:nth-child(2) { animation-delay: -0.15s; }

@keyframes button-loading {
  0%, 80%, 100% {
    transform: scale(0.3); }
  40% {
    transform: scale(1); 
  }
}
</style>