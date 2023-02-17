<template>
  <div class="c-tag" :class="{ 'c-tag--card': !colorGray, 'c-tag--filter': colorGray }">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  text: string;
  colorGray?: boolean;
}

const { text, colorGray = false } = defineProps<Props>();
</script>

<style scoped lang="scss">
.c-tag {
  display: inline-block;
  padding: 0 4px;
  margin: $spacing-unit;
  margin-left: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 2px solid;
  cursor: pointer;

  &--filter {
    @extend .u-color-gray;
    border-color: $gray-darker;
  }

  &--card {
    @extend .u-color-card;
    border-color: $gray;
  }
}
</style>
