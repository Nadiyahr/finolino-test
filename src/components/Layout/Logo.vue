<template>
  <div @click="$router.push('/')" class="u-w-fit u-h-fit u-pointer u-py-2">
    <svg class="logo">
      <use
        href="/icons/icon_list.svg#finolino"
        :width="logoWidth"
        :height="logoHeight"
        :viewBox="`0 0 ${logoWidth} ${logoHeight}`"
      ></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import breakpoints from '@/plugins/breakpoints';

const isMobile = breakpoints.between('mobile', 'tablet');
const logoWidth = computed(() => (isMobile.value ? 200 : 300));
const logoHeight = computed(() => (isMobile.value ? 30 : 50));
</script>

<style scoped lang="scss">
.logo {
  display: inline-block;
  width: 200px;
  height: 30px;
  margin: 0 auto;

  @include moreThanTablet {
    width: 300px;
    height: 50px;
  }
}
</style>
