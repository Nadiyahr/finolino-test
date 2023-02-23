<template>
  <button
    @click="$emit('on-click')"
    class="c-button-select"
    :class="buttonClass"
    :style="{ width: width }"
  >
    <slot />
    <CIcon
      v-if="!hideIcon"
      id="chevron-down"
      width="12"
      height="12"
      class="icon-chevron"
    />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CIcon from '@/components/components/CIcon.vue';

interface Props {
  isMenu?: boolean;
  width?: string;
  hideIcon?: boolean;
}

const { isMenu = false, width = 'fit-content', hideIcon = false } = defineProps<Props>();

const buttonClass = computed(() =>
  isMenu ? 'c-button-select--menu' : 'c-button-select--common'
);
</script>

<style scoped lang="scss">
.c-button-select {
  height: fit-content;
  text-align: start;
  letter-spacing: -1px;
  line-height: 20px;
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
    background-image: url('/icons/chevron-right-white.svg');
    background-repeat: no-repeat;
    background-position: 95% 50%;
    background-size: 10px;
  }

  &--common {
    min-width: fit-content;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    font-size: 14px;
    line-height: $base-fs;
    padding: 0 8px;
    line-height: 28px;
    background-image: unset;

    @include moreThanTablet {
      font-size: $base-fs;
    }
  }
}
</style>
