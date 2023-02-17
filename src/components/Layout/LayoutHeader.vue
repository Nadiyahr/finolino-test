<template>
  <header class="u-bg-dark">
    <nav class="u-relative u-z-10 u-bg-dark">
      <div class="u-flex u-jsfy-btwn u-py-2">
        <div v-if="!isMobile" class="u-flex u-align-center">
          <CButtonHeader name="Man" />
          <CButtonHeader name="Woman" />
        </div>
        <div class="u-w-fit u-my-auto u-pointer">
          <Logo />
        </div>
        <CSearch
          v-if="!isMobile && openSearch"
          @toggle-search="toggleSearch"
          class="u-w-30 u-my-auto"
        />
        <IconButtonGroup
          v-if="!openSearch"
          :icons="icons"
          @toggle-menu="toggleMenu"
          @toggle-cross="toggleMenu"
          @toggle-search="toggleSearch"
          @toggle-cart="$router.push('/woman/clothing/dresses')"
        />
      </div>
    </nav>
    <transition name="fade">
      <MobileMenu v-if="isMobile && openMobileMenu" class="c-mobile-menu" />
    </transition>
    <Portal target="#breadcrumbs-target" />
    <Portal target="#title-target" />
    <Portal target="#filter-target" />
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import breakpoints from '@/plugins/breakpoints';
import Logo from './Logo.vue';
import IconButtonGroup from './components/IconButtonGroup.vue';
import CSearch from './components/CSearch.vue';
import MobileMenu from './components/MobileMenu.vue';
import CButtonHeader from './components/CButtonHeader.vue';

const isMobile = breakpoints.smaller('tablet');

const openMobileMenu = ref(false);
const openSearch = ref(false);

const menu = computed(() => (openMobileMenu.value ? 'cross' : 'menu'));
const icons = computed(() =>
  isMobile.value
    ? ['cart', 'profile', menu.value]
    : ['search', 'heart', 'profile', 'cart']
);

const toggleMenu = () => (openMobileMenu.value = !openMobileMenu.value);
const toggleSearch = () => (openSearch.value = !openSearch.value);
</script>

<style scoped lang="scss">
.fade-enter-from,
.fade-leave-to {
  top: -100%;
}

.fade-enter-to,
.fade-leave-from {
  top: 60px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease-in-out;
}
</style>
