<template>
  <div class="c-mobile-menu">
    <div class="c-mobile-menu__content">
      <div class="c-mobile-menu__top">
        <CSearch />
        <div>
          <CButtonHeader is-menu hide-icon>Man</CButtonHeader>
          <CButtonHeader is-menu hide-icon>Woman</CButtonHeader>
        </div>
      </div>
      <CFooterList title="Contacts" :list="contacts" class="c-mobile-menu__contacts" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CSearch from '../../components/CSearch.vue';
import CButtonHeader from '../../components/CButtonHeader.vue';
import CFooterList from '../../components/CFooterList.vue';

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
    gap: 30vh;
  }
}
</style>
