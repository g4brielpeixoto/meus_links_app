<template>
  <footer class="footer">
    <slot />
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: $white;
  box-shadow: 0px 0px 10px 10px $white;
  display: grid;
  position: fixed;
  bottom: 0;
  padding: 1rem 1rem 1.5rem 1rem;
  grid-gap: 0.5rem;
  grid-auto-flow: column;
  width: 100%;
  height: 3rem;
  align-content: center;
}
</style>
