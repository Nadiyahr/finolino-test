<template>
  <div
    class="c-tag"
    :class="{
      'c-tag--card': !colorGray,
      'c-tag--filter': colorGray,
      'c-tag--active': active,
      'c-tag--portal': cross,
    }"
  >
    {{ text }}
    <CIcon
      v-if="cross"
      id="cross"
      width="8"
      height="8"
      class="c-tag__icon"
      @click="$emit('on-click')"
    />
  </div>
</template>

<script setup lang="ts">
import CIcon from './CIcon.vue';
interface Props {
  text: string;
  colorGray?: boolean;
  active?: boolean;
  cross?: boolean;
}

const { text, colorGray = false, active = false, cross = false } = defineProps<Props>();
</script>

<style scoped lang="scss">
.c-tag {
  display: inline-flex;
  min-width: 20px;
  height: fit-content;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 0 4px;
  margin-left: 0;
  font-weight: 400;
  font-size: 14px;
  border: 2px solid;
  cursor: pointer;

  &:hover {
    background-color: $gray;
  }

  @include moreThanTablet {
    min-width: 28px;
    font-size: 16px;
    line-height: 24px;
  }

  &--filter {
    /* margin-right: 10px; */
    color: $gray-darker;
    border-color: $gray-darker;
  }

  &--card {
    color: $text-card;
    border-color: $gray;
  }

  &--active {
    color: $dark;
    border-color: $dark;
  }

  &--portal {
    margin: 0;

    &:hover {
      background-color: #e4dbf5;
    }
  }

  &__icon {
    display: inline-block;
    width: 8px;
    height: 10px;
  }
}
</style>
