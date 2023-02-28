<template>
  <section class="c-pop u-bg-semitrasparent">
    <h2>Popular items</h2>
    <CGridContainer mobile-desk>
      <CardComponent v-for="(good, i) in goods" :key="good.id" :item="good" />
    </CGridContainer>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CardComponent from '@/components/components/CardComponent.vue';
import CGridContainer from '@/components/components/CGridContainer.vue';
import data from '@/api/finolino_dresses.json';

const goods = computed(() => data.filter(({ image }) => image !== null).slice(0, 4));
</script>

<style scoped lang="scss">
.c-pop {
  height: fit-content;
  padding-top: 50px;
  text-align: center;
}
</style>
