<template>
  <header class="header">
    <slot />
  </header>
</template>

<style scoped lang="scss">
.header {
  position: absolute;
  top: 0.7rem;
  display: grid;
  padding: 0 1.5rem;
  grid-gap: 0.5rem;
  grid-auto-flow: column;
  width: 100%;
  height: 3rem;
  align-content: center;
}
</style>
