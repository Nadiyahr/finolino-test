<template>
  <header class="u-bg-dark">
    <nav>
      <div class="u-flex u-jsfy-btwn u-py-2">
        <div class="u-flex">
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
          <svg class="logo">
            <use
              href="/src/assets/icons/icon_list.svg#finolino"
              width="300"
              height="50"
              viewBox="0 0 300 50"
            ></use>
          </svg>
        </div>
        <IconButtonGroup :icons="icons" />
      </div>
    </nav>
    <Portal target="#breadcrumbs-target" />
    <Portal target="#title-target" />
    <Portal target="#filter-target" />
  </header>
</template>

<script setup lang="ts">
import IconButtonGroup from './IconButtonGroup.vue';

const icons = ['search', 'heart', 'profile', 'cart']
</script>
