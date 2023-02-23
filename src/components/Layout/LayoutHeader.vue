<template>
  <header class="c-header">
    <nav class="c-header__nav">
      <div class="c-header__container">
        <div v-if="!isMobile" class="c-header__buttons">
          <CButtonHeader>Man</CButtonHeader>
          <CButtonHeader>Woman</CButtonHeader>
        </div>
        <div class="c-header__logo">
          <CLogo />
        </div>
        <CSearch
          v-if="!isMobile && openSearch"
          @toggle-search="toggleSearch"
          class="c-header__search"
        />
        <CIconButtonGroup
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
import CLogo from '../components/CLogo.vue';
import CIconButtonGroup from '../components/CIconButtonGroup.vue';
import CSearch from '../components/CSearch.vue';
import MobileMenu from './components/MobileMenu.vue';
import CButtonHeader from '../components/CButtonHeader.vue';

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
  background-color: $primary;

  &__nav {
    position: relative;
    background-color: $primary;
    z-index: 100;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;

    @include onDesktop {
      padding: 0;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
  }

  &__logo {
    max-width: fit-content;
    margin: auto 0;
    cursor: pointer;
  }

  &__search {
    width: 30%;
    margin: auto 0;
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
