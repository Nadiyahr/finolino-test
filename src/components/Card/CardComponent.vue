<template>
  <div class="u-relative">
    <div class="c-card">
      <div v-if="item.is_new" class="c-card__new">New</div>
      <div class="c-card__div">
        <img :src="imageUrl" alt="" class="c-card__img" on />
      </div>
      <div
        @mouseover="triger(true)"
        @mouseleave="triger(false)"
        @click.stop="triger(true)"
        ref="ignoreRef"
        class="c-card__info"
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
        <p>
          <span class="c-card__season">Season:</span>
          {{}}
          <span class="c-card__tag">{{ item.seasons.join(', ') }}</span>
        </p>
        <div>
          <TagButton v-for="(size, i) in item.sizes" :key="i" :text="size" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { Good } from '@/vite-env';
import { ref } from 'vue';
import TagButton from './TagButton.vue';
import { onClickOutside } from '@vueuse/core';

interface Props {
  item: Good;
}

const { item } = defineProps<Props>();

const imageUrl = item.image === null ? './images/no-img.jpg' : item.image;

const title = item.title.split(/,|and/)[0];

const hover = ref(false);
const tagsRef = ref(null);
const ignoreRef = ref(null);

const triger = (bool: boolean) => (hover.value = bool);

onClickOutside(tagsRef, () => triger(false), { ignore: [ignoreRef] });
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.7, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
