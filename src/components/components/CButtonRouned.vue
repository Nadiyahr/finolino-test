<template>
  <button
    @click="$emit('action')"
    :disabled="disabeled"
    class="c-button-top"
    :class="addClass"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  text: string;
  additionalClass: string;
  disabeled?: boolean;
}

const { text, additionalClass, disabeled = false } = defineProps<Props>();

const addClass = computed(() => `c-button--${additionalClass}`);
</script>

<style scoped lang="scss">
.c-button {
  @include main-button;
  animation: radius 3s ease-in-out;

  &:hover {
    border-radius: 0;
  }

  &--top {
    border: 4px solid $white;
    border-radius: unset;
    border-top-right-radius: 50px;
    background-color: transparent;

    @include onDesktop {
      background-color: #d7985a80;
      transition: border-top-right-radius 0.3s ease-in-out;
      &:hover {
        border-top-right-radius: 0;
        transition: border-top-right-radius 0.3s ease-in-out;
      }
    }
  }

  &--subscribe {
    border: 1px solid $orange;
    border-radius: unset;
    border-bottom-right-radius: 50px;
    background-color: $orange;
    margin-top: $spacing-xl;
    transition: border-bottom-right-radius 0.3s ease-in-out;
    &:hover {
      border-bottom-right-radius: 0;
      transition: border-bottom-right-radius 0.3s ease-in-out;
    }
  }
}
</style>
