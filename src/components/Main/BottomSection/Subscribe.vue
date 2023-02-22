<template>
  <section>
    <div class="c-subscribe">
      <h3 class="c-subscribe__title">Subscribe to newsletter</h3>
      <h6>Sign up for email updates on the our latest offers and news</h6>
      <input
        type="email"
        v-model="email"
        class="c-subscribe__imput"
        placeholder="Enter Your Email"
      />
      <div class="u-color-white">
        <input
          type="checkbox"
          id="checkbox"
          v-model="terms"
          class="c-subscribe__checkbox"
        />
        <label for="checkbox">I accept the terms of Privacy Policy</label>
      </div>
      <CButtonRouned
        text="Subscribe"
        additional-class="subscribe"
        :disabeled="disabeled"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import CButtonRouned from '@/components/components/CButtonRouned.vue';

// const form = ref({
//   email: '',
//   terms: false
// })

const email = ref('');
const terms = ref(false);
const disabeled = ref(true);

watch(
  () => !(email.value && terms.value),
  (bool) => {
    disabeled.value = bool;
  }
);
</script>

<style scoped lang="scss">
.c-subscribe {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: transparent;
  padding: $spacing-xl 0 100px;
  gap: $spacing-lg;

  &__title {
    margin-top: $base-fs;

    @include moreThanTablet {
      margin-top: $spacing-xl;
    }
  }

  &__imput {
    text-align: center;
    border: none;
    border-bottom: 1px solid $white;
    background-color: $black;
    letter-spacing: 0;
  }

  &__checkbox {
    padding: $spacing-unit;
    margin-right: $spacing-md;
    accent-color: $gray-darker;
  }
}
</style>
