<template>
   <button class="u-bg-dark u-color-ligt c-button-header">
      {{ name }}
      <svg v-if="isDesktop" class="icon-chevron">
        <use
          href="/icons/icon_list.svg#chevron-down"
          width="12"
          height="12"
          viewBox="0 0 16 16"
        ></use>
      </svg>
    </button>
</template>

<script setup lang="ts">
import breakpoints from '@/plugins/breakpoints';
interface Props {
  name: string;
}

const isDesktop = breakpoints.greaterOrEqual('tablet')

const { name } = defineProps<Props>();
</script>

