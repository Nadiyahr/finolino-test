<template>
  <div class="u-inline-block c-button-select">
    <button class="c-button-select__btn" :class="buttonClass">
      {{ name }}
      <svg v-if="!isMenu" class="icon-chevron">
        <use
          href="/icons/icon_list.svg#chevron-down"
          width="12"
          height="12"
          viewBox="0 0 16 16"
        ></use>
      </svg>
    </button>
    <Portal :target="`#popup-${name}`" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  name: string;
  isMenu?: boolean;
}

const { name, isMenu = false } = defineProps<Props>();

const buttonClass = computed(() =>
  isMenu ? 'c-button-select__btn--menu' : 'c-button-select__btn--common'
);
</script>

<style scoped lang="scss">
.c-button-select {
  height: fit-content;
  position: relative;

  &__btn {
    text-align: start;
    letter-spacing: -1px;
    text-transform: uppercase;
    background-color: $black;
    color: $white;
    border: none;
    &:hover {
      transform: none;
    }

    &--menu {
      width: 100%;
      font-size: $fs-md;
      line-height: $fs-md;
      font-weight: $fw-6;
      padding: 8px 20px;
      padding-left: 0;
      margin: auto 2px 8px;
      background-image: url('icons/chevron-right-white.svg');
      background-repeat: no-repeat;
      background-position: 95% 50%;
      background-size: 10px;
    }

    &--common {
      font-size: $base-fs;
      line-height: $base-fs;
      width: fit-content;
      margin: auto 2px;
      padding: 0 8px;
      line-height: 28px;
      margin: auto 8px;
      background-image: unset;
    }
  }
}
</style>
