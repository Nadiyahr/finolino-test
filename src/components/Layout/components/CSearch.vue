<template>
  <div class="c-input c-input__container">
    <input v-model="data" class="c-input__input" placeholder="SEARCH"/>
    <IconButtonGroup :icons="['search']" @toggle-search="$emit('toggle-search')" class="u-w-fit"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IconButtonGroup from '../IconButtonGroup.vue';

const data = ref('')
</script>