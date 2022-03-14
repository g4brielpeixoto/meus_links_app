<template>
  <div class="meus_links">
    <clientOnly>
      <notifications 
        position="bottom center" 
        classes="notifications"
        :max="1"
      />
    </clientOnly>
    <Nuxt />
  </div>
</template>

<style lang="scss">
body {
  padding: 0;
}
.meus_links {
  display: grid;
  margin: 0 auto;
  margin-bottom: 2rem;
}
</style>
