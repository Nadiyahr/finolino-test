<template>
  <div class="c-mobile-menu">
    <div class="c-mobile-menu__content">
      <div class="c-mobile-menu__top">
        <CSearch />
        <div>
          <CButtonHeader name="Man" is-menu />
          <CButtonHeader name="Woman" is-menu />
        </div>
      </div>
      <FooterList title="Contacts" :list="contacts" class="c-mobile-menu__contacts" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CSearch from './CSearch.vue';
import CButtonHeader from './CButtonHeader.vue';
import FooterList from './FooterList.vue';

const contacts = ['+11 (011) 111 11 11 ', '+22 (022) 222 22 22', 'finolino@finolino.com'];
</script>

<style scoped lang="scss">
.c-mobile-menu {
  position: absolute;
  top: 50px;
  left: 0;
  width: 100vw;
  min-height: fit-content;
  height: 98vh;
  padding: 20px;
  background-color: inherit;
  z-index: 50;

  &__content {
    display: flex;
    flex-direction: column;
    @extend .u-gap-menu;
  }
}
</style>
