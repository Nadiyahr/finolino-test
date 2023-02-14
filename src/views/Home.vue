<template>
  <Default>
    <TopBanner />
    <HalfBanner />
    <BottomSection>
      <CSwiper />
      <Subscribe />
    </BottomSection>
  </Default> 
</template>

<script setup lang="ts">
import Default from '@/layouts/Default.vue';
import TopBanner from '@/components/Main/TopBanner.vue';
import HalfBanner from '@/components/Main/HalfBanner.vue';
import Subscribe from '@/components/Main/components/Subscribe.vue';
import BottomSection from '@/components/Main/BottomSection.vue';
import CSwiper from '@/components/Main/components/CSwiper.vue';
</script>
