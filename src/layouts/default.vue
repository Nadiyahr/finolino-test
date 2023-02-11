<template>
  <LayoutHeader/>
  <slot></slot>
  <LayoutFooter />
</template>

<script setup lang="ts">
import LayoutHeader from '@/components/Layout/LayoutHeader.vue';
import LayoutFooter from '@/components/Layout/LayoutFooter.vue';
</script>
