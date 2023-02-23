<template>
  <section class="c-bg-catalog u-pt-8">
    <div class="c-portal">
      <RouterLink
        v-for="(item, i) in path"
        :key="i"
        to="/"
        class="u-color-info u-capitalizze u-no-decor"
      >
        {{ item }} <span v-if="i !== path.length - 1" class="u-color-info"> > </span>
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
              :text="tag"
              :key="i"
              colorGray
              cross
              @on-click="deleteTag(idx, tag)"
            />
          </div>
        </div>
        <div class="c-btn-group u-pt-10 u-md-pt-0">
          <div class="c-btn-group__container">
            <CButtonHeader name="filters" width="100px" @on-click="openFilterPopup" />
            <PopupFilter v-if="isFilterOpen" @close="isFilterOpen = !isFilterOpen" />
          </div>
          <div class="c-btn-group__container">
            <CButtonHeader
              :name="sortBy"
              width="100px"
              @on-click="isNevestOpen = !isNevestOpen"
            />
            <PopupNewest v-if="isNevestOpen" @close="isNevestOpen = !isNevestOpen" />
          </div>
        </div>
      </div>
    </div>
    <div class="c-card-container">
      <CardComponent
        v-for="card in filtredGoods"
        :key="card.id"
        :item="card"
        class="c-card-container__card"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Good } from '@/vite-env';
import { ref, watch, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import CardComponent from '@/components/components/CardComponent.vue';
import CButtonHeader from '@/components/components/CButtonHeader.vue';
import PopupNewest from '@/components/popUps/PopupNewest.vue';
import PopupFilter from '@/components/popUps/PopupFilter.vue';
import CTagButton from '../components/CTagButton.vue';

const route = useRoute();
const store = useStore();
const isNevestOpen = ref(false);
const isFilterOpen = ref(false);

const filtresTags = computed(() => store.state.filterTags);

let sortBy = ref(store.state.ordering);
let filtredGoods = ref<Good[]>([]);

const path = route.fullPath.split('/').slice(1);
const title = path[2];

const openFilterPopup = () => {
  isFilterOpen.value = !isFilterOpen.value;
};

const deleteTag = (type: string | number, value: string | string[]) => {
  if (type === 'byPrice') {
    value = [];
  }
  store.commit('SET_FILTER_GOODS', { type, value });
  store.dispatch('APPLY__FILTERS');
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
  store.commit('SORT_GOODS', store.state.goods);
  filtredGoods.value = store.state.sortedGoods;
});
</script>

<style lang="scss">
.c-btn-group {
  display: flex;
  justify-content: space-between;
  gap: 16px;

  &__container {
    position: relative;
    min-width: fit-content;
    height: fit-content;
  }
}
.c-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
  padding: 20px 0 120px;

  @include moreThanTablet {
    gap: 20px;
  }

  &__card {
    flex: 0 1 calc(25% - 1em);
  }
}

.c-bg-catalog {
  background-color: $gray;

  @include moreThanTablet {
    @include bg-img;
  }
}

.c-portal {
  position: relative;
}
</style>
