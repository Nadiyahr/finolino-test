<template>
  <footer class="c-footer">
    <div class="grid grid--tablet grid--desktop u-mb-center">
      <div
        class="grid__item grid__item--1-2 grid__item--tablet-1-12 grid__item--desktop-1-5 u-mb-center"
      >
        <Logo class="c-footer__logo" />
        <IconButtonGroup v-if="!isMobile" :icons="icons" />
        <p class="u-fw-light u-py-2 u-color-info u-fs-xs">
          &copy; {{ year }}. All rights reserved
        </p>
      </div>
      <div
        class="grid__item grid__item--1-2 grid__item--tablet-1-3 grid__item--desktop-6-7"
      >
        <h6 v-if="isMobile">About us</h6>
        <FooterList v-else title="About" :list="about" />
      </div>
      <div
        class="grid__item grid__item--1-2 grid__item--tablet-4-6 grid__item--desktop-8-9"
      >
        <h6 v-if="isMobile">Privacy policy</h6>
        <FooterList v-else title="Help" :list="help" />
      </div>
      <div
        class="grid__item grid__item--1-2 grid__item--tablet-7-11 grid__item--desktop-10-12"
      >
        <h6 v-if="isMobile" class="u-pb-5">FAQs</h6>
        <FooterList v-else title="Contacts" :list="contacts" />
      </div>
      <div class="grid__item grid__item--1-2 u-pb-5">
        <IconButtonGroup v-if="isMobile" :icons="icons" class="u-m-auto" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import breakpoints from '@/plugins/breakpoints';
import Logo from './Logo.vue';
import IconButtonGroup from './components/IconButtonGroup.vue';
import FooterList from './components/FooterList.vue';

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
}
</style>
