<template>
  <div
    class="c-grid-container"
    :class="{
      'c-grid-container--mobile-desk': mobileDesk,
      'c-grid-container--all-screans': allScreans,
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  mobileDesk?: boolean;
  allScreans?: boolean;
}

const { mobileDesk = false, allScreans = false } = defineProps<Props>();
</script>

<style scoped lang="scss">
.c-grid-container {
  display: grid;
  padding: 16px 0;
  grid-template-columns: repeat(2, minmax(135px, 200px));
  gap: 12px;
  justify-content: space-evenly;

  &--mobile-desk {
    @include moreThanTablet {
      grid-template-columns: repeat(4, auto);
      gap: 20px;
    }
  }

  &--all-screans {
    @include onTablet {
      grid-template-columns: repeat(3, minmax(160px, 225px));
      gap: 16px;
    }

    @include onDesktop {
      grid-template-columns: repeat(4, minmax(200px, 285px));
      gap: 20px;
    }
  }
}
</style>
