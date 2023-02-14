<template>
  <section>
    <div class="c-subscribe">
      <h3 class="c-subscribe__title" >Subscribe to newsletter</h3>
      <h6>Sign up for email updates on the our latest offers and news</h6>
      <input type="email" v-model="email" class="c-subscribe__imput" placeholder="Enter Your Email">
      <div class="u-color-ligt ">
        <input type="checkbox" id="checkbox" v-model="terms" class="c-subscribe__checkbox" />
        <label for="checkbox" >I accept the terms of Privacy Policy</label>
      </div>
      <button type="submit" :disabled="disabeled" class="c-subscribe__button" >
        Subscribe
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';

// const form = ref({
//   email: '',
//   terms: false
// })

const email = ref('')
const terms = ref(false)
const disabeled = ref(true)

watch(
  () => !(email.value && terms.value),
  (bool) => {
    disabeled.value = bool
  }
)
</script>


