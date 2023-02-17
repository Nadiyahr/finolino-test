<template>
  <section class="c-bg-img-combine">
    <div>
      <div class="c-top-container">
        <h1 class="c-m-h1">New<br />collection</h1>
        <CButtonRouned
          text="Go to catalog"
          additional-class="top"
          @action="$router.push('/woman/clothing/dresses')"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CButtonRouned from '../CButtonRouned.vue';
</script>

<style scoped lang="scss">
.c-top-container {
  width: 100%;
  padding-top: 60vh;

  @include moreThanTablet {
    padding-top: 50vh;
    padding-left: 12%;
  }
}

.c-bg-img-combine {
  width: 100vw;
  height: 94vh;
  @include bg-two-img;

  @include moreThanTablet {
    height: 110vh;
  }
}
</style>
