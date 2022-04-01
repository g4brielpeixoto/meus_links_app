<template>
  <div class="skeleton username"></div>
</template>

<style lang="scss" scoped>
.username {
  width: 12rem;
  height: 1rem;
  border-radius: 1rem;
  background-color: $lightGray;
}

@include screen('small') {
  .username {
    width: 50vw;
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