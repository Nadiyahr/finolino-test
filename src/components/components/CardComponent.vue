<template>
  <div class="u-relative">
    <div ref="ignoreRef" class="c-card">
      <div v-if="item.is_new" class="c-card__new">New</div>
      <div class="c-card__img" :style="{ '--bgImage': `url('${item.image}')` }"></div>
      <div
        class="c-card__info"
        @mouseover="triger(true)"
        @mouseleave="triger(false)"
        @click.stop="triger(true)"
      >
        <h6 class="c-card__title">{{ title }}</h6>
        <p class="c-card__price">{{ item.price }} UAH</p>
      </div>
    </div>
    <transition name="slide-fade">
      <div
        v-if="hover"
        @mouseover="triger(true)"
        @mouseleave="triger(false)"
        ref="tagsRef"
        class="c-card__tags"
      >
        <p class="u-p-0">
          <span class="c-card__season">Season:</span>
          {{}}
          <span class="c-card__tag">{{ item.seasons.join(', ') }}</span>
        </p>
        <div class="u-flex u-gap-4 u-gap-md-6 u-pt-4">
          <CTagButton v-for="(size, i) in item.sizes" :key="i" :text="size" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { Good } from '@/vite-env';
import { ref } from 'vue';
import CTagButton from './CTagButton.vue';
import { onClickOutside } from '@vueuse/core';

interface Props {
  item: Good;
}

const { item } = defineProps<Props>();

const title = item.title.split(/,|and| /)[0];

const hover = ref(false);
const tagsRef = ref(null);
const ignoreRef = ref(null);

const triger = (bool: boolean) => (hover.value = bool);

onClickOutside(tagsRef, () => triger(false), { ignore: [ignoreRef] });
</script>

<style lang="scss">
.c-card {
  position: relative;
  min-width: 135px;
  height: 260px;
  background-color: #fff;
  border-top-left-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  @include shadow;

  @include onTablet {
    height: 300px;
  }

  @include onDesktop {
    height: 360px;
  }

  &__img {
    height: 75%;
    background-image: var(--bgImage), url('/images/finolino.svg'),
      radial-gradient(circle, #d7cfd2 0%, #d1ddec 100%);
    background-repeat: no-repeat, space round;
    background-position: center 0, center;
    background-size: cover, 90%;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.5s ease-out;
    }
  }

  &__info {
    text-align: start;
    padding: 10px 16px;
    border-top: 1px solid $gray;

    @include moreThanTablet {
      padding: 16px;
    }
  }

  &__tags {
    position: absolute;
    bottom: -26%;
    left: 0;
    width: 100%;
    opacity: 1;
    text-align: start;
    padding: 8px 16px 10px;
    opacity: 1;
    background-color: #fff;
    z-index: 100;
    @include shadow;

    @include onTablet {
      bottom: -22%;
    }

    @include onDesktop {
      bottom: -18%;
    }
  }

  &__title {
    color: $primary;
    font-size: 14px;
    line-height: 22px;
    font-weight: $fw-5;

    @include moreThanTablet {
      font-size: 16px;
      line-height: 20px;
    }
  }

  &__price {
    color: $primary;
    font-size: 12px;

    @include moreThanTablet {
      font-size: 14px;
    }
  }

  &__season {
    font-size: 10px;
    color: $gray-darker;

    @include onTablet {
      font-size: 12px;
    }

    @include onDesktop {
      font-size: 14px;
    }
  }

  &__tag {
    font-size: 10px;
    color: $primary;
    padding-top: $spacing-sm;

    @include onTablet {
      font-size: 12px;
    }

    @include onDesktop {
      font-size: 14px;
    }
  }

  &__new {
    color: $text-white;
    width: 30%;
    height: 7%;
    font-size: 12px;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 12px;
    line-height: 16px;
    background-color: $orange;

    @include moreThanTablet {
      font-size: 16px;
      line-height: 25px;
      padding: 0 16px;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.7, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  /* transform: translateY(-10px); */
  opacity: 0;
}
</style>
