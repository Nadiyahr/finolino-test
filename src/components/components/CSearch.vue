<template>
  <div class="c-input c-input__container">
    <input v-model="data" class="c-input__input" placeholder="SEARCH" />
    <CIconButtonGroup
      :icons="['search']"
      @toggle-search="$emit('toggle-search')"
      class="u-w-fit"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CIconButtonGroup from './CIconButtonGroup.vue';

const data = ref('');
</script>

<style scoped lang="scss">
.c-input {
  &__container {
    display: flex;
    align-items: center;
    border: 1px solid $white;
    margin-bottom: $spacing-lg;

    @include moreThanTablet {
      width: 300px;
      margin-bottom: $spacing-sm;
    }
  }

  &__input {
    width: 90%;
    height: 40px;
    padding-left: $spacing-lg;
    border: none;
    border-right: 1px solid $white;
    background-color: inherit;
  }
}
</style>
