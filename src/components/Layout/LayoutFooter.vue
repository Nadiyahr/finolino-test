<template>
  <footer class="c-footer">
    <div class="grid grid--tablet grid--desktop u-text-center u-text-lg-start">
      <div
        class="grid__item grid__item--1-2 grid__item--tablet-1-12 grid__item--desktop-1-5 u-text-center u-text-lg-left"
      >
        <CLogo class="c-footer__logo" />
        <CIconButtonGroup v-if="!isMobile" :icons="icons" class="c-footer__icons" />
        <p class="u-fw-light u-py-8 u-py-md-10 u-color-info u-fs-xs">
          &copy; {{ year }}. All rights reserved
        </p>
      </div>
      <div
        class="grid__item grid__item--1-2 grid__item--tablet-2-4 grid__item--desktop-6-7"
      >
        <h6 v-if="isMobile">About us</h6>
        <CFooterList v-else title="About" :list="about" class="" />
      </div>
      <div
        class="grid__item grid__item--1-2 grid__item--tablet-5-6 grid__item--desktop-8-9"
      >
        <h6 v-if="isMobile">Privacy policy</h6>
        <CFooterList v-else title="Help" :list="help" />
      </div>
      <div
        class="grid__item grid__item--1-2 grid__item--tablet-7-10 grid__item--desktop-10-12"
      >
        <h6 v-if="isMobile">FAQs</h6>
        <CFooterList v-else title="Contacts" :list="contacts" />
      </div>
      <div class="grid__item grid__item--1-2">
        <CIconButtonGroup v-if="isMobile" :icons="icons" class="u-m-auto u-my-md-auto" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import breakpoints from '@/plugins/breakpoints';
import CLogo from '../components/CLogo.vue';
import CIconButtonGroup from '../components/CIconButtonGroup.vue';
import CFooterList from '../components/CFooterList.vue';

const isMobile = breakpoints.between('mobile', 'tablet');
const icons = ['instagram', 'facebook', 'printerist'];
const about = ['Finolino, Inc.', 'Policies', 'FAQs'];
const help = ['Delivery', 'Payment', 'Return'];
const contacts = ['+11 (011) 111 11 11 ', '+22 (022) 222 22 22', 'finolino@finolino.com'];

const year = new Date().getFullYear();
</script>

<style scoped lang="scss">
.c-footer {
  width: 100vw;
  height: fit-content;
  padding-top: $spacing-lg;
  background-color: $black;

  &__logo {
    margin: auto;
    @include onDesktop {
      margin: 0;
      padding-bottom: $spacing-xl;
      align-self: flex-start;
    }
  }

  &__icons {
    @include onTablet {
      margin: auto;
    }
  }
}
</style>
