<template>
  <Default>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </Default>
</template>

<script setup lang="ts">
import Default from '@/layouts/Default.vue';
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.3;
}
</style>
