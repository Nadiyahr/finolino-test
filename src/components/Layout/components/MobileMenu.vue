<template>
  <div class="c-mobile-menu">
    <div class="c-mobile-menu__content">
      <div>
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
  top: 60px;
  left: 0;
  width: 100vw;
  min-height: fit-content;
  height: 100vh;
  padding: 20px;
  // padding-top: 60px;
  background-color: inherit;

  &__content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__contacts {
    display: inline-block;
    height: 95vh;
    padding-top: 37vh;
  }
}
</style>
