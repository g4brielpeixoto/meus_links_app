<template>
  <div class="skeleton link-editor"></div>
</template>

<style lang="scss" scoped>
.link-editor {
  width: 28rem;
  height: 6rem;
  padding: 1rem;
  border-radius: 1rem;
  grid-template-columns: 1.9rem auto 2rem;
  background-color: $lightGray;
}

@include screen('small') {
  .link-editor {
    width: 85vw;
  }
}

.skeleton::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
    90deg,
    rgba(#f1f1f1, 0) 0,
    rgba(#f1f1f1, 0.2) 20%,
    rgba(#f1f1f1, 0.2) 60%,
    rgba(#f1f1f1, 0)
  );
  animation: shimmer 2s infinite;
  content: '';
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>