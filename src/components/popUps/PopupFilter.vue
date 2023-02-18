<template>
  <div ref="filterRef" class="c-popup">
    <ul>
      <li class="c-popup__item">Size</li>
      <li class="c-popup__item">Seasonality</li>
      <li class="c-popup__item">Price</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { onClickOutside } from '@vueuse/core';

const store = useStore();
const emit = defineEmits(['close']);

const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];
const seasons = ['winter', 'summer'];
const priceRange = ['1', '10000'];

const filterRef = ref(null);
const closePopup = () => emit('close');

onClickOutside(filterRef, () => closePopup());
</script>

<style scoped lang="scss">
.c-popup {
  position: absolute;
  top: 120%;
  right: 8px;
  width: fit-content;
  height: fit-content;
  padding: 10px 0;
  background-color: $white;
  color: $gray-darker;
  z-index: 10;

  &__item {
    padding: 4px 12px;
    cursor: pointer;

    &:hover {
      background-color: $secondary;
    }
  }
}

.active {
  color: $black;
}
</style>
