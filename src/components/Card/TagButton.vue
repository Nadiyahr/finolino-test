<template>
  <div class="c-tag" :class="{ 'c-tag--card': !colorGray, 'c-tag--filter': colorGray }">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  text: string;
  colorGray?: boolean;
}

const { text, colorGray = false } = defineProps<Props>();
</script>
