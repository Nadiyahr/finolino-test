<template>
  <div class="c-icon c-icon__container">
    <button
      v-for="(icon, i) in icons"
      :key="i"
      @click="$emit(`toggle-${icon}`)"
      class="c-icon__button"
    >
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
