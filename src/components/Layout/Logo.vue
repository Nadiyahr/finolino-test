<template>
  <div class="u-w-fit u-pointer u-py-2 u-mb-m-auto">
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

const isMobile = breakpoints.between('mobile', 'tablet')
const logoWidth = computed(() => isMobile.value ? 150 : 300)
const logoHeight = computed(() => isMobile.value ? 24 : 50)
</script>
