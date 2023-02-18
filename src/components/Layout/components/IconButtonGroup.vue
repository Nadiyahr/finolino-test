<template>
  <div class="c-icon c-icon__container">
    <button
      v-for="(icon, i) in icons"
      :key="i"
      @click="$emit(`toggle-${icon}`)"
      class="c-icon__button"
    >
      <CIcon :id="icon" class="icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import CIcon from '@/components/icons/CIcon.vue';
interface Props {
  icons: string[];
}

const { icons } = defineProps<Props>();
</script>

<style scoped lang="scss">
.c-icon {
  &__container {
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    margin: auto 0;
  }

  &__button {
    width: fit-content;
    height: fit-content;
    background-color: inherit;
    padding: 10px;
    padding-bottom: 4px;
    border: none;
  }
}
</style>
