<template>
  <section class="c-bg-catalog">
    <portal to="#breadcrumbs-target">
      <div class="c-portal">
        <p class="u-color-info u-capitalizze">{{ path.join(' > ') }}</p>
      </div>
    </portal>
    <portal to="#title-target">
      <div class="c-portal">
        <h5 class="u-color-dark u-capitalizze">{{ title }}</h5>
      </div>
    </portal>
    <portal to="#filter-target">
      <div class="c-portal">
        <div class="u-flex u-jsfy-btwn">
          <div></div>
          <div>
            <CButtonHeader name="filters" @on-click="isFilterOpen = !isFilterOpen" />
            <portal to="#popup-filters" class="c-portal">
              <PopupNewest v-if="isFilterOpen" @close="isFilterOpen = !isFilterOpen" />
            </portal>
            <CButtonHeader :name="sortBy" @on-click="isNevestOpen = !isNevestOpen" />
            <portal to="#popup-newest" class="c-portal">
              <PopupNewest v-if="isNevestOpen" @close="isNevestOpen = !isNevestOpen" />
            </portal>
          </div>
        </div>
      </div>
    </portal>
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
// import Goods from '@/api/finolino_dresses.json';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import CardComponent from '../Card/CardComponent.vue';
import CButtonHeader from '../Layout/components/CButtonHeader.vue';
import PopupNewest from '../popUps/PopupNewest.vue';

const route = useRoute();
const store = useStore();

// const filtredGoods = ref(store.state.goods);

let filtredGoods = computed(() => store.state.goods);
const sortBy = computed(() => store.getters.getOrderFilter);
watch(
  store.state.goods,
  () => (filtredGoods = store.state.goods)
  // () => console.log('59', filtredGoods)
);

const isNevestOpen = ref(false);
const isFilterOpen = ref(false);

const path = route.fullPath.split('/').slice(1);
const title = path[2];

console.log('68', filtredGoods.value);
</script>

<style lang="scss">
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
  @include bg-img;

  background-color: $gray;
}

.c-portal {
  position: relative;
}
</style>
