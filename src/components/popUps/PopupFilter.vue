<template>
  <div ref="filterRef" class="c-popup">
    <ul>
      <li class="c-popup__item">
        <p class="u-color-dark u-mb-md">Size</p>
        <div class="c-popup__sizes">
          <CTagButton
            v-for="(size, i) in sizes"
            :key="i"
            :text="size"
            :active="selectedSizes.includes(size)"
            colorGray
            @click="select('bySize', size)"
          />
        </div>
      </li>
      <li class="c-popup__item">
        <p class="u-color-dark u-mb-md">Seasonality</p>
        <div>
          <CCheckbox
            v-for="season in seasons"
            :lable="season"
            :value="selectedSeasons.includes(season)"
            @check="select('bySeason', season)"
          >
            {{ season }}
          </CCheckbox>
        </div>
      </li>
      <li class="c-popup__item">
        <p class="u-color-dark u-mb-md">Price</p>
      </li>
      <li class="c-popup__item u-flex u-align-end">
        <CButtonHeader
          name="Apply"
          class="u-align-end"
          @on-click="applyFiltres"
          width="80px"
          hide-icon
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, Ref, ref } from 'vue';
import { useStore } from 'vuex';
import { onClickOutside } from '@vueuse/core';
import CTagButton from '../components/CTagButton.vue';
import CButtonHeader from '../components/CButtonHeader.vue';
import CCheckbox from '../components/CCheckbox.vue';
import { Filters } from '@/store/types';

const store = useStore();
const emit = defineEmits(['close']);

const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];
const seasons = ['winter', 'summer'];
const priceRange = ['1000', '10000'];

const selectedSizes = computed(() => store.state.filters.bySize);
const selectedSeasons = computed(() => store.state.filters.bySeason);

const select = (type: Filters, value: string) => {
  store.commit('FILTER_GOODS', { type, value });
};

const filterRef = ref(null);
const closePopup = () => emit('close');

const applyFiltres = () => {
  store.dispatch('APPLY__FILTERS');
  closePopup();
};

onClickOutside(filterRef, () => closePopup());
</script>

<style scoped lang="scss">
.c-popup {
  @include popup-position;
  @include shadow;
  min-width: 200px;
  width: fit-content;
  height: fit-content;
  padding: 10px 0;
  background-color: $white;
  color: $gray-darker;
  z-index: 10;

  &__item {
    padding: 4px 12px;
    cursor: pointer;
  }
}

.active {
  color: $black;
  border-color: $black;
}
</style>
/* &:hover { background-color: $secondary; }
