<template>
  <Default>
    <TopBanner />
    <HalfBanner />
    <BottomSection>
      <CSwiper />
      <PopularItems />
      <Subscribe />
    </BottomSection>
  </Default>
</template>

<script setup lang="ts">
import Default from '@/layouts/Default.vue';
import TopBanner from '@/components/Main/TopBanner.vue';
import HalfBanner from '@/components/Main/HalfBanner.vue';
import Subscribe from '@/components/Main/BottomSection/Subscribe.vue';
import BottomSection from '@/components/Main/BottomSection/BottomSection.vue';
import CSwiper from '@/components/components/CSwiper.vue';
import PopularItems from '@/components/Main/BottomSection/PopularItems.vue';
</script>
