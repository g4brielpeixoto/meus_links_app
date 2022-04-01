<template>
  <div class="page-skeleton">
    <AvatarSkeleton />
    <div class="user-info">
      <TitleSkeleton />
      <UsernameSkeleton />
    </div>
    <div class="links">
      <LinkSkeleton />
      <LinkSkeleton />
      <LinkSkeleton />
      <LinkSkeleton />
    </div>
  </div>
</template>
 
<style lang="scss" scoped>
.page-skeleton {
  display: grid;
  margin: 0 auto;
  justify-items: center;
  grid-gap: 1.5rem;

  .user-info {
    display: grid;
    grid-gap: 0.5rem;
    justify-items: center;
  }

  .links {
    display: grid;
    grid-gap: 0.70rem;
  }
}

</style>