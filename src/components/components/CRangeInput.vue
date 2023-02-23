<template>
  <Slider
    id="slider"
    v-model="range"
    tooltipPosition="bottom"
    :min="100"
    :max="10000"
    :step="50"
    showTooltip="drag"
    class="black-range"
    @change="$emit('apply', $event)"
  />
</template>

<script setup lang="ts">
import Slider from '@vueform/slider';
import { ref, watch, watchEffect } from 'vue';

interface Props {
  max?: number | string;
  min?: number | string;
}

const emit = defineEmits(['apply']);

const { min = 250, max = 2000 } = defineProps<Props>();

const range = ref<unknown>([+min, +max]);
</script>

<style>
@import '@vueform/slider/themes/default.css';

.black-range {
  --slider-height: 2px;
  --slider-bg: #858585;
  --slider-connect-bg: #191919;
  --slider-radius: 0;
  --slider-handle-bg: #191919;
  --slider-handle-width: 12px;
  --slider-handle-height: 12px;
  --slider-handle-radius: 0;
  --slider-handle-shadow: 0;
  --slider-tooltip-font-size: 0.1rem;
  --slider-tooltip-py: 0;
  --slider-tooltip-bg: trasparent;
  --slider-tooltip-color: #ffffff20;
  --slider-tooltip-min-width: 0;
  cursor: pointer;
}
</style>
