<template>
  <div class="skeleton-page">
    <div class="skeleton avatar"></div>
    <div class="user-info">
      <div class="skeleton name"></div>
      <div class="skeleton username"></div>
    </div>
    <div class="skeleton main-button"></div>
    <div class="skeleton link-editor"></div>
    <div class="skeleton link-editor"></div>
    <div class="skeleton link-editor"></div>
  </div>
</template>
 
<style lang="scss" scoped>
.skeleton-page {
  display: grid;
  margin: 0 auto;
  justify-items: center;
  grid-gap: 1.25rem;

  .avatar {
    height: 8rem;
    width: 8rem;
    border-radius: 50%;
    display: inline-block;
    border-radius: 50%;
    background-color: $lightGray;
  }

  .user-info {
    display: grid;
    justify-items: center;
  }

  .main-button {
    width: 28rem;
    height: 3rem;
    background-color: $lightGray;
    border-radius: 8rem;
  }

  .name {
    width: 28rem;
    height: 2rem;
    border-radius: 1rem;
    background-color: $lightGray;
    margin-bottom: 0.5rem;
  }

  .username {
    width: 12rem;
    height: 1rem;
    border-radius: 1rem;
    background-color: $lightGray;
  }

  .link-editor {
    width: 28rem;
    height: 6rem;
    padding: 1rem;
    border-radius: 1rem;
    display: grid;
    grid-template-columns: 1.9rem auto 2rem;
    align-items: center;
    background-color: $lightGray;
  }

  @include screen('small') {
    .avatar{
      margin-top: 6rem;
    }
    .link-editor, .name, .main-button {
      width: 85vw;
    }
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
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.2) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 2s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}

</style>