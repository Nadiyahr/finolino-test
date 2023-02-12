<template>
  <header class="u-bg-dark u-relative">
    <nav>
      <div class="u-flex u-jsfy-btwn u-py-2">
        <div v-if="isNotMobile" class="u-flex">
          <button class="u-bg-dark u-color-ligt u-w-fit c-button-header">
          Man
          <svg class="icon-chevron">
            <use
              href="/src/assets/icons/icon_list.svg#chevron-down"
              width="12"
              height="12"
              viewBox="0 0 16 16"
            ></use>
          </svg>
        </button>
          <button class="u-bg-dark u-color-ligt u-w-fit c-button-header">
          Woman
          <svg class="icon-chevron">
            <use
              href="/src/assets/icons/icon_list.svg#chevron-down"
              width="12"
              height="12"
              viewBox="0 0 16 16"
            ></use>
          </svg>
        </button>
        </div>
        <div class="u-w-fit u-my-auto u-pointer">
          <Logo />
        </div>
        <Search v-if="isNotMobile && openSearch" @toggle-search="toggleSearch" class="u-w-30 u-my-auto"/>
        <IconButtonGroup v-if="isNotMobile && !openSearch" :icons="icons" @togle-menu="toggleMenu" @toggle-search="toggleSearch" />
      </div>
    </nav>
    <MobileMenu v-if="isMobile"/>
    <Portal target="#breadcrumbs-target" />
    <Portal target="#title-target" />
    <Portal target="#filter-target" />
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import breakpoints from '@/plugins/breakpoints';
import Logo from './Logo.vue';
import IconButtonGroup from './IconButtonGroup.vue';
import Search from './components/Search.vue';
import MobileMenu from './components/MobileMenu.vue';

const isNotMobile = breakpoints.greaterOrEqual('tablet')
const isMobile = breakpoints.smaller('tablet')

const openMobileMenu = ref(false)
const openSearch = ref(false)

const icons = computed(() => isMobile.value ? ['cart', 'profile', 'menu'] : ['search', 'heart', 'profile', 'cart'])

const toggleMenu = () => openMobileMenu.value = !openMobileMenu.value
const toggleSearch = () => openSearch.value = !openSearch.value
</script>
