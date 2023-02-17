<template>
  <div class="u-text-center u-pt-1">
    <h2>
      The Gifting<br v-if="mobile" />
      Sale
    </h2>
    <swiper
      :direction="direction"
      :slidesPerView="'auto'"
      :centeredSlides="centeredSlides"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="breakponts"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(img, i) in images" :key="i" class="u-relative">
        <img :src="`./images/${img}.png`" :alt="img" />
        <div class="c-label u-text-l u-p-lg">
          <h4>{{ title }}</h4>
          <p>1000 UAH and under</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel } from 'swiper';
import breakpoints from '@/plugins/breakpoints';
import 'swiper/css';
import 'swiper/css/pagination';

const mobile = breakpoints.between('mobile', 'tablet');
const modules = [Pagination, Mousewheel];

const direction = computed(() => (mobile.value ? 'vertical' : 'horizontal'));
const centeredSlides = computed(() => !mobile.value);

const breakponts = {
  '640': {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  '768': {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  '1024': {
    slidesPerView: 2,
    spaceBetween: 50,
  },
};

const images = ['glasses', 'clock', 'shoe', 'hat'];
const title = 'Lorem ipsum dolor sit amet';
</script>

<style scoped lang="scss">
.swiper {
  width: 100vw;
  height: 1050px;
  padding: 20px;

  @include onTablet {
    height: fit-content;
  }

  @include onDesktop {
    height: 80vh;
  }
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vw;

  @include onDesktop {
    height: 100%;
  }
}

.swiper-slide-active {
  @include onDesktop {
    width: 56vw !important;
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sliderWrapper {
  :global(.swiper-pagination-bullet) {
    width: 10px !important;
    height: 10px !important;
    background-color: $gray !important;
  }

  :global(.swiper-pagination-bullet-active) {
    width: 11px !important;
    height: 11px !important;
    background: $gray-darker !important;
  }
}
</style>
