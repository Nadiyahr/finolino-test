<template>
  <section class="c-pop u-bg-trasparent">
    <h2>Popular items</h2>
    <div class="grid grid--desktop grid--tablet c-pop__container">
      <div
        v-for="(good, i) in goods"
        :key="good.id"
        :class="`c-pop__item grid__item ${gridItemClass(i)} `"
      >
        <CardComponent :item="good" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CardComponent from '@/components/Card/CardComponent.vue';
import data from '@/api/finolino_dresses.json';

const goods = computed(() => data.filter(({ image }) => image !== null).slice(0, 4));

// filter(({ image }) => image !== null).

const celStartEnd = [1, 2, 1, 2];
const celStartT = [1, 4, 1, 4];
const celEndT = [3, 6, 3, 6];
const celStartD = [1, 4, 7, 10];
const celEndD = [3, 6, 9, 12];

const gridItemClass = (index: number) => {
  return `
    grid__item--${celStartEnd[index]}-${celStartEnd[index]} grid__item--tablet-${celStartT[index]}-${celEndT[index]} grid__item--desktop-${celStartD[index]}-${celEndD[index]}
  `;
};
</script>

<style scoped lang="scss">
.c-pop {
  height: fit-content;
  padding-top: 50px;
  text-align: center;

  &__container {
    padding-top: 20px;

    @include moreThanTablet {
      display: grid;
    }
  }

  &__item {
    @include onTablet {
      &:nth-child(odd) {
        padding-left: 30px;
      }

      &:nth-child(even) {
        padding-right: 30px;
      }
    }
  }
}
</style>
