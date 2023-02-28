<template>
  <div
    class="u-relative"
    @mouseover="trigger(true)"
    @mouseleave="trigger(false)"
    @click.stop="triggerClick()"
  >
    <div ref="ignoreRef" class="c-card">
      <div class="u-h-75 u-overflow-hiden u-relative">
        <div v-if="item.is_new" class="c-card__new">New</div>
        <div
          class="c-card__img"
          :class="{ 'c-card__img--hover': hover }"
          :style="{ '--bgImage': `url('${item.image}')` }"
        ></div>
      </div>
      <div class="c-card__info">
        <h6 class="c-card__title">{{ title }}</h6>
        <p class="c-card__price">{{ item.price }} UAH</p>
      </div>
    </div>
    <transition name="slide-fade">
      <div
        v-if="hover"
        @mouseover="trigger(true)"
        @mouseleave="trigger(false)"
        ref="tagsRef"
        class="c-card__tags"
      >
        <p class="u-p-0">
          <span class="c-card__season">Season:</span>
          {{}}
          <span class="c-card__tag">{{ item.seasons.join(', ') }}</span>
        </p>
        <div class="u-flex u-gap-4 u-gap-md-6 u-pt-6">
          <CTagButton v-for="(size, i) in item.sizes" :key="i">{{ size }}</CTagButton>
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

const triggerClick = () => (hover.value = !hover.value);

const trigger = (bool: boolean) => (hover.value = bool);

onClickOutside(tagsRef, () => trigger(false), { ignore: [ignoreRef] });
</script>

<style lang="scss">
.c-card {
  position: relative;
  height: 260px;
  background-color: #fff;
  border-top-left-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  @include shadow;

  &:hover {
    transition: all 0.3s easy-in-out;
  }

  @include onTablet {
    height: 300px;
  }

  @include onDesktop {
    height: 360px;
  }

  &__img {
    height: 100%;
    background-image: var(--bgImage), url('/images/finolino.svg'),
      radial-gradient(circle, #d7cfd2 0%, #d1ddec 100%);
    background-repeat: no-repeat, space round;
    background-position: center 0, center;
    background-size: cover, 90%;
    transition: transform 0.3s ease-out;

    &--hover {
      transform: scale(1.1);
      transition: transform 0.3s ease-out;
    }
  }

  &__info {
    width: 100%;
    text-align: start;
    padding: 8px;
    border-top: 1px solid $gray;

    @include moreThanTablet {
      padding: 16px;
    }
  }

  &__tags {
    position: absolute;
    width: 100%;
    top: 99%;
    left: 0;
    opacity: 1;
    text-align: start;
    padding: 8px;
    padding-top: 0;
    opacity: 1;
    background-color: #fff;
    z-index: 100;
    @include shadow;

    @include moreThanTablet {
      padding: 16px;
      padding-top: 0;
    }
  }

  &__title {
    color: $primary;
    font-size: 14px;
    line-height: 22px;
    font-weight: $fw-5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

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
    letter-spacing: -0.3px;
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
    letter-spacing: -0.3px;
    padding-top: $spacing-sm;

    @include onTablet {
      font-size: 12px;
    }

    @include onDesktop {
      font-size: 14px;
    }
  }

  &__new {
    position: absolute;
    top: 0;
    left: 0;
    color: $text-white;
    width: 30%;
    height: 10%;
    font-size: 12px;
    padding: 2px 10px;
    line-height: 16px;
    background-color: $orange;
    z-index: 49;

    @include moreThanTablet {
      font-size: 16px;
      line-height: 25px;
      padding: 2px 16px;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.5s ease-in-out;
}
.slide-fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
}
</style>
