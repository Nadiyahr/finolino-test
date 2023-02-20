<template>
  <svg>
    <use :href="getImageUrl" :width="width" :height="height" :viewBox="viewBox"></use>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  id: string;
  width?: string;
  height?: string;
  viewBox?: string;
}

const { id, width = '16', height = '16', viewBox = '0 0 16 16' } = defineProps<Props>();

const path = new URL('/icons/', import.meta.url);
const getImageUrl = computed(() => `${path}/icon_list.svg#${id}`);
</script>
