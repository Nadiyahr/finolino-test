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
            <CButtonHeader name="filters" />
            <CButtonHeader name="newest" />
            <portal to="#popup-newest" class="c-portal">
              <PopupNewest />
            </portal>
          </div>
        </div>
      </div>
    </portal>
    <div class="c-card-container">
      <CardComponent
        v-for="card in Goods"
        :key="card.id"
        :item="card"
        class="c-card-container__card"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import Goods from '@/api/finolino_dresses.json';
import CardComponent from '../Card/CardComponent.vue';
import { useRoute } from 'vue-router';
import CButtonHeader from '../Layout/components/CButtonHeader.vue';
import PopupNewest from '../popUps/PopupNewest.vue';

const route = useRoute();

const path = route.fullPath.split('/').slice(1);
const title = path[2];

console.log(path);
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
