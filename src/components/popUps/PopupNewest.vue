<template>
  <div class="c-popup">
    <ul>
      <li>Newest</li>
      <li>A-Z</li>
      <li>Z-A</li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.c-popup {
  position: absolute;
  top: 82%;
  right: 8px;
  width: fit-content;
  height: fit-content;
  background-color: $white;
  color: $black !important;
  z-index: 10;
}
</style>
