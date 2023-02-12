<template>
  <div class="u-flex u-jsfy-btwn">
    <button v-for="(icon, i) in icons" :key="i" @click="$emit(`toggle-${icon}`)" class="u-bg-dark c-button-header">
      <svg class="icon">
        <use
          :href="`/src/assets/icons/icon_list.svg#${icon}`"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        ></use>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icons: string[];
}

const { icons } = defineProps<Props>();
</script>