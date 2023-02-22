<template>
  <div class="c-checkbox" :class="{ disabled: disabled }">
    <label :for="lable" class="c-checkbox__lable">
      <input
        type="checkbox"
        :id="lable"
        :checked="value"
        class="u-hiden"
        @change="$emit('check')"
      />
      <span
        class="c-checkbox__span"
        :class="{ active: value }"
        tabindex="0"
        @keyup.enter="$emit('check', !value)"
      >
        <CIcon v-if="value" id="check" class="icon" />
      </span>
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
import CIcon from '@/components/components/CIcon.vue';
import { computed, ref, toRef } from 'vue';

interface Props {
  lable: string;
  value: boolean;
  disabled?: boolean;
}

const { lable, value, disabled = false } = defineProps<Props>();
</script>

<style scoped lang="scss">
/* Disabled */
.c-checkbox {
  display: flex;
  align-items: center;
  font-weight: $fw-4;

  &__lable {
    display: inline-flex;
    gap: 12px;
    cursor: pointer;
    align-items: center;
  }

  &__span {
    width: 20px;
    height: 20px;
    border: 2px solid $gray-darker;

    &:hover {
      background-color: $gray;
    }
  }
}
.active {
  color: $dark;
  border-color: $dark;
}
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
