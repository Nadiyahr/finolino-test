<template>
  <section class="c-bg-catalog">
    <div class="c-portal u-pt-8">
      <RouterLink
        v-for="(item, i) in path"
        :key="i"
        to="/"
        class="u-color-info u-capitalizze u-no-decor u-inline-block"
      >
        {{ item }}
        <span v-if="i !== path.length - 1" class="u-color-info u-px-4">></span>
      </RouterLink>
    </div>
    <div class="c-portal">
      <h5 class="u-color-black u-capitalizze">{{ title }}</h5>
    </div>
    <div class="c-portal">
      <div class="u-flex u-jsfy-btwn u-flex-wrap-rev">
        <div class="u-flex u-gap-8 u-flex-wrap">
          <div
            v-for="(tags, idx) in filtresTags"
            :key="idx"
            class="u-flex u-gap-8 u-pt-10 u-md-pt-0 u-flex-wrap"
          >
            <CTagButton
              v-for="(tag, i) in tags"
              :key="i"
              colorGray
              cross
              @on-click="deleteTag(idx, tag)"
            >
              {{ tag }}
            </CTagButton>
          </div>
        </div>
        <div class="c-btn-group u-pt-10 u-md-pt-0">
          <div class="c-btn-group__container">
            <CButtonHeader :width="buttonWidth" @on-click="openFilterPopup"
              >filters</CButtonHeader
            >
            <PopupFilter
              v-if="isFilterOpen"
              @apply="applyFilter"
              @close="isFilterOpen = !isFilterOpen"
            />
          </div>
          <div class="c-btn-group__container">
            <CButtonHeader :width="buttonWidth" @on-click="isNevestOpen = !isNevestOpen">
              {{ sortBy }}
            </CButtonHeader>
            <PopupNewest v-if="isNevestOpen" @close="isNevestOpen = !isNevestOpen" />
          </div>
        </div>
      </div>
    </div>
    <CGridContainer all-screans>
      <CardComponent
        v-for="card in filtredGoods"
        :key="card.id"
        :item="card"
        class="c-card-container__card"
      />
    </CGridContainer>
  </section>
</template>

<script setup lang="ts">
import { Good } from '@/vite-env';
import { ref, watch, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import goods from '@/api/finolino_dresses.json';
import breakpoints from '@/plugins/breakpoints';
import CardComponent from '@/components/components/CardComponent.vue';
import CButtonHeader from '@/components/components/CButtonHeader.vue';
import PopupNewest from '@/components/popUps/PopupNewest.vue';
import PopupFilter from '@/components/popUps/PopupFilter.vue';
import CTagButton from '../components/CTagButton.vue';
import CGridContainer from '../components/CGridContainer.vue';

const route = useRoute();
const store = useStore();
const isMobile = breakpoints.between('mobile', 'tablet');
const isNevestOpen = ref(false);
const isFilterOpen = ref(false);

const filtresTags = computed(() => store.state.filterTags);
const buttonWidth = computed(() => (isMobile ? '80px' : '100px'));

let sortBy = ref(store.state.ordering);
let filtredGoods = ref<Good[]>([]);

const path = [...route.fullPath.split('/')];
const title = path[2];

const openFilterPopup = () => {
  isFilterOpen.value = !isFilterOpen.value;
};

const deleteTag = (type: string | number, value: string | string[]) => {
  if (type === 'byPrice') {
    value = [];
  }
  store.commit('SET_FILTER_GOODS', { type, value });
  store.dispatch('APPLY_FILTERS', goods);
};

const applyFilter = () => {
  store.dispatch('APPLY_FILTERS', goods);
};

watch(
  () => store.state.ordering,
  (newVal) => {
    sortBy.value = newVal;
    filtredGoods.value = store.state.sortedGoods;
  }
);

watch(
  () => store.state.sortedGoods,
  (newVal) => (filtredGoods.value = newVal)
);

onMounted(() => {
  store.commit('SORT_GOODS', goods);
  filtredGoods.value = store.state.sortedGoods;
});
</script>

<style lang="scss">
.c-btn-group {
  width: 100vw;
  display: flex;
  justify-content: end;
  gap: 16px;

  @include onDesktop {
    width: fit-content;
    justify-content: space-between;
  }

  &__container {
    position: relative;
    min-width: fit-content;
    height: fit-content;
  }
}

.c-bg-catalog {
  min-height: 100vh;
  padding-bottom: 20px;
  background-color: $gray;

  @include moreThanTablet {
    @include bg-img;
  }
}
</style>
