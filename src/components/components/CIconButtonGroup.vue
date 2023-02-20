<template>
  <div class="c-icon c-icon__container">
    <button
      v-for="(icon, i) in icons"
      :key="i"
      @click="$emit(`toggle-${icon}`)"
      class="c-icon__button"
    >
      <CIcon
        :id="icon"
        width="18"
        height="18"
        class="icon"
        :class="{ 'u-pt-2': icon === 'menu' }"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import CIcon from '@/components/components/CIcon.vue';
interface Props {
  icons: string[];
}

const { icons } = defineProps<Props>();
</script>

<style scoped lang="scss">
.c-icon {
  &__container {
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    margin: auto 0;
    padding-top: 16px;
  }

  &__button {
    width: fit-content;
    height: fit-content;
    background-color: inherit;
    padding: 0 6px;
    border: none;

    @include over400px {
      padding: 0 8px;
    }

    @include moreThanTablet {
      padding: 0 10px;
    }
  }
}
</style>
