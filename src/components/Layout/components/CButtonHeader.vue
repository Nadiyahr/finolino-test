<template>
  <button
    @click="$emit('on-click')"
    class="c-button-select"
    :class="buttonClass"
    :style="{ width: width }"
  >
    {{ name }}
    <CIcon v-if="!isMenu" id="chevron-down" width="12" height="12" class="icon-chevron" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CIcon from '@/components/icons/CIcon.vue';

interface Props {
  name: string;
  isMenu?: boolean;
  width?: string;
}

const { name, isMenu = false, width = 'fit-content' } = defineProps<Props>();

const buttonClass = computed(() =>
  isMenu ? 'c-button-select--menu' : 'c-button-select--common'
);
</script>

<style scoped lang="scss">
.c-button-select {
  height: fit-content;
  text-align: start;
  letter-spacing: -1px;
  line-height: 28px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: $base-fs;
    line-height: $base-fs;
    padding: 0 8px;
    line-height: 28px;
    margin: auto 8px;
    background-image: unset;
  }
}
</style>
