<template>
  <div ref="popupRef" class="c-popup">
    <ul>
      <li class="c-popup__item">
        <p class="u-color-black u-mb-12">Size</p>
        <div class="c-popup__sizes">
          <CTagButton
            v-for="(size, i) in sizes"
            :key="i"
            :active="selectedSizes.includes(size)"
            colorGray
            @click="select('bySize', size)"
          >
            {{ size }}
          </CTagButton>
        </div>
      </li>
      <li class="c-popup__item">
        <p class="u-color-black u-mb-12">Seasonality</p>
        <div class="u-flex u-direction-col u-gap-8">
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
        <p class="u-color-black u-mb-12">Price</p>
        <div>
          <div class="u-flex u-gap-8 u-pb-12">
            <input type="text" v-model="min" class="input-range" @input="setKey" />
            -
            <input type="text" v-model="max" class="input-range" @input="setKey" />
          </div>
          <CRangeInput :min="min" :max="max" @apply="setRange" :key="key" />
        </div>
      </li>
      <li class="c-popup__item u-flex u-align-end">
        <CButtonHeader class="u-align-end" @on-click="applyFiltres" hide-icon>
          Apply
        </CButtonHeader>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { onClickOutside } from '@vueuse/core';
import CTagButton from '../components/CTagButton.vue';
import CButtonHeader from '../components/CButtonHeader.vue';
import CCheckbox from '../components/CCheckbox.vue';
import CRangeInput from '../components/CRangeInput.vue';
import { Filters } from '@/store/types';

const store = useStore();
const emit = defineEmits(['close', 'apply']);

const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];
const seasons = ['winter', 'summer'];

const selectedSizes = computed(() => store.state.bySize);
const selectedSeasons = computed(() => store.state.bySeason);
const priceRange = computed(() => store.state.byPrice);

const min = ref(priceRange.value[0] || 250);
const max = ref(priceRange.value[1] || 2000);
const key = computed(() => min.value + max.value);

const setRange = (newRange: number[]) => {
  min.value = newRange[0];
  max.value = newRange[1];

  store.commit('SET_FILTER_GOODS', { type: 'byPrice', value: newRange });
};

const setKey = () => {
  watchEffect(() => key.value);
  setRange([+min.value, +max.value]);
};

const select = (type: Filters, value: string) => {
  store.commit('SET_FILTER_GOODS', { type, value });
};

const popupRef = ref(null);
const closePopup = () => emit('close');

const applyFiltres = () => {
  emit('apply');
  closePopup();
};

onClickOutside(popupRef, () => closePopup());
</script>

<style scoped lang="scss">
.c-popup {
  @include popup-position;
  @include shadow;
  min-width: 200px;
  width: fit-content;
  height: fit-content;
  padding: 10px 0 8px;
  background-color: $white;
  color: $gray-darker;
  z-index: 200;

  &__sizes {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__item {
    padding: 4px 12px;
    margin-bottom: 8px;
  }
}

.active {
  color: $black;
  border-color: $black;
}

.input-range {
  display: inline-block;
  width: 60px;
  font-size: 16px;
  font-weight: $fw-5;
  text-align: center;
  border: none;
  border-bottom: 2px solid $gray-darker;
  background-color: $white;
  color: $gray-darker;
  letter-spacing: 0;
}
</style>
