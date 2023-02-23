<template>
  <section class="c-bg-img-combine">
    <div>
      <div class="c-top-container">
        <h1 class="c-m-h1">New<br />collection</h1>
        <CButtonRouned to="/woman/clothing/dresses" additional-class="top">
          Go to catalog
        </CButtonRouned>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CButtonRouned from '../components/CButtonRouned.vue';
</script>

<style scoped lang="scss">
.c-top-container {
  width: 100%;
  padding-top: 60vh;

  @include onTablet {
    width: 100%;
    padding-top: 65vh;
  }

  @include onDesktop {
    padding-top: 22%;
    padding-left: 12%;
  }
}

.c-bg-img-combine {
  width: 100vw;
  height: 92vh;
  @include bg-top-banner;

  @include onTablet {
    height: 100vh;
  }

  @include onDesktop {
    height: 100vh;
  }
}
</style>
