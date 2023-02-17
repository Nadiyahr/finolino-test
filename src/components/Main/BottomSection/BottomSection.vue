<template>
  <div class="c-bottom-section">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.c-bottom-section {
  width: 100vw;
  height: fit-content;
  background-color: $black;

  @include moreThanTablet {
    background-image: url('/images/LETTERS.svg');
    background-repeat: no-repeat;
    background-position: 0 80%;
    background-size: cover;
  }
}
</style>
