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
