<template>
  <div class="admin-skeleton">
    <AvatarSkeleton />
    <div class="user-info">
      <TitleSkeleton />
      <UsernameSkeleton />
    </div>
    <MainButtonSkeleton />
    <LinkEditorSkeleton />
    <LinkEditorSkeleton />
    <LinkEditorSkeleton />
  </div>
</template>
 
<style lang="scss" scoped>
.admin-skeleton {
  display: grid;
  margin: 0 auto;
  justify-items: center;
  grid-gap: 1.25rem;

  .user-info {
    display: grid;
    grid-gap: 0.5rem;
    justify-items: center;
  }
}

</style>