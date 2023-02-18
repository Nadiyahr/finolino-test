<template>
  <section class="c-bg-catalog">
    <div class="c-portal">
      <p class="u-color-info u-capitalizze">{{ path.join(' > ') }}</p>
    </div>
    <div class="c-portal">
      <h5 class="u-color-dark u-capitalizze">{{ title }}</h5>
    </div>
    <div class="c-portal">
      <div class="u-flex u-jsfy-btwn">
        <div></div>
        <div>
          <div class="c-btn-container">
            <CButtonHeader
              name="filters"
              width="100px"
              @on-click="isFilterOpen = !isFilterOpen"
            />
            <PopupFilter v-if="isFilterOpen" @close="isFilterOpen = !isFilterOpen" />
          </div>
          <div class="c-btn-container">
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
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import CardComponent from '../Card/CardComponent.vue';
import CButtonHeader from '../Layout/components/CButtonHeader.vue';
import PopupNewest from '../popUps/PopupNewest.vue';
import PopupFilter from '../popUps/PopupFilter.vue';

const route = useRoute();
const store = useStore();
const isNevestOpen = ref(false);
const isFilterOpen = ref(false);

let sortBy = ref(store.state.filters.ordering);
let filtredGoods = ref<Good[]>([]);

watch(
  () => store.state.filters.ordering,
  (newVal) => {
    sortBy.value = newVal;
    filtredGoods.value = store.state.sortedGoods;
  }
);

const path = route.fullPath.split('/').slice(1);
const title = path[2];

onMounted(() => {
  store.commit('SORT_GOODS', 'Newest');
  filtredGoods.value = store.state.sortedGoods;
});
</script>

<style lang="scss">
.c-btn-container {
  display: inline-block;
  position: relative;
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
