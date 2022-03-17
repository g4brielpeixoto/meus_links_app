<template>
  <header class="header">
    <slot />
  </header>
</template>

<style scoped lang="scss">
.header {
  display: grid;
  padding: 0 1.5rem;
  grid-gap: 0.5rem;
  grid-auto-flow: column;
  width: 100%;
  height: 5rem;
  align-content: center;
}
</style>
