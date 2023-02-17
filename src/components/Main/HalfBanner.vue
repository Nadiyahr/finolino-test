<template>
  <div class="u-fit-sm">
    <div class="c-man">
      <div class="c-label">
        <h2>Man</h2>
      </div>
    </div>
    <div class="c-woman">
      <div class="c-label">
        <h2>Woman</h2>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.c-man {
  @include half-container('@/assets/images/man.png');
}

.c-woman {
  @include half-container('@/assets/images/woman.png');
}
</style>
