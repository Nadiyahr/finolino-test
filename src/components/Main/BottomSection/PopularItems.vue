<template>
  <section class="c-pop u-bg-trasparent">
    <h2>Popular items</h2>
    <div class="grid grid--desktop grid--tablet c-pop__container">
      <div v-for="i in 4" :key="i" :class="`c-pop__item grid__item ${gridItemClass(i)} `">
        <CardComponent />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CardComponent from '@/components/Card/CardComponent.vue';

const celStartEnd = [1, 2, 1, 2]
const celStartT = [1, 4, 1, 4]
const celEndT = [3, 6, 3, 6]
const celStartD = [1, 4, 7, 10]
const celEndD = [3, 6, 9, 12]

const gridItemClass = (index: number) => {
  const i = index - 1
  return `grid__item--${celStartEnd[i]}-${celStartEnd[i]} grid__item--tablet-${celStartT[i]}-${celEndT[i]} grid__item--desktop-${celStartD[i]}-${celEndD[i]}`
}
</script>
