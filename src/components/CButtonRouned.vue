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

  &--top {
    border: 4px solid $white;
    border-radius: unset;
    border-top-right-radius: 50px;
    background-color: transparent;

    @include moreThanTablet {
      background-color: #d7985a80;
    }
  }

  &--subscribe {
    border: 1px solid $orange;
    border-radius: unset;
    border-bottom-right-radius: 50px;
    background-color: $orange;
    margin-top: $spacing-xl;
  }
}
</style>
