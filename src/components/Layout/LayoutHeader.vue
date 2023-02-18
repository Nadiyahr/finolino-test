<template>
  <header class="c-header">
    <nav class="c-header__nav">
      <div class="c-header__container">
        <div v-if="!isMobile" class="c-header__buttons">
          <CButtonHeader name="Man" />
          <CButtonHeader name="Woman" />
        </div>
        <div class="c-header__logo">
          <Logo />
        </div>
        <CSearch
          v-if="!isMobile && openSearch"
          @toggle-search="toggleSearch"
          class="c-header__search"
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
      <MobileMenu v-if="isMobile && openMobileMenu" />
    </transition>
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
.c-header {
  @extend .u-bg-dark;

  &__nav {
    @extend .u-relative, .u-z-100;
  }

  &__container {
    @extend .u-flex, .u-jsfy-btwn;
    padding: 8px 0;

    @include onDesktop {
      padding: 0;
    }
  }

  &__buttons {
    @extend .u-flex, .u-align-center;
  }

  &__logo {
    @extend .u-w-fit, .u-my-auto, .u-pointer;
  }

  &__search {
    @extend .u-w-30, .u-my-auto;
  }
}
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
