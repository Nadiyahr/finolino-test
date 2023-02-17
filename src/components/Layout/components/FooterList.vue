<template>
  <div class="c-fotter-list">
    <h6 class="c-fotter-list__title">{{ title }}</h6>
    <ul class="">
      <li v-for="(item, i) in list" :key="i" class="c-fotter-list__item">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  list: string[];
}

const { title, list } = defineProps<Props>();
</script>

<style scoped lang="scss">
.c-fotter-list {
  color: $white;
  &__title {
    margin: $spacing-md 0;
    letter-spacing: -1px;
  }

  &__item {
    padding-bottom: 18px;
    cursor: pointer;
  }
}
</style>
