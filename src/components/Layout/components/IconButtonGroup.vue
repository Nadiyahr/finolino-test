<template>
  <div class="c-icon c-icon__container">
    <button v-for="(icon, i) in icons" :key="i" @click="$emit(`toggle-${icon}`)" class="c-icon__button">
      <svg class="icon">
        <use
          :href="`./icons/icon_list.svg#${icon}`"
          width="18"
          height="18"
          viewBox="0 0 18 18"
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