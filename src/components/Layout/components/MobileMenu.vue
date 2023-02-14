<template>
  <div class="c-mobile-menu">
    <div class="c-mobile-menu__content">
      <div>
        <CSearch />
        <div >
          <CButtonHeader name="Man" />
          <CButtonHeader name="Woman" />
        </div>
      </div>
      <FooterList title="Contacts" :list="contacts" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CSearch from './CSearch.vue';
import CButtonHeader from './CButtonHeader.vue';
import FooterList from './FooterList.vue';

const contacts = ['+11 (011) 111 11 11 ', '+22 (022) 222 22 22', 'finolino@finolino.com']

</script>
