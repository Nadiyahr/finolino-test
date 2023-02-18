<template>
  <div ref="sortRef" class="c-popup">
    <ul>
      <li
        @click="setFilter('Newest')"
        class="c-popup__item"
        :class="{ active: isActive('Newest') }"
      >
        Newest
      </li>
      <li
        @click="setFilter('A-Z')"
        class="c-popup__item"
        :class="{ active: isActive('A-Z') }"
      >
        A-Z
      </li>
      <li
        @click="setFilter('Z-A')"
        class="c-popup__item"
        :class="{ active: isActive('Z-A') }"
      >
        Z-A
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { onClickOutside } from '@vueuse/core';

const store = useStore();
const emit = defineEmits(['close']);

const selected = computed(() => store.getters.getOrderFilter);

const isActive = computed(() => (el: string) => el === selected.value);

const sortRef = ref(null);

const closePopup = () => emit('close');

const setFilter = (el: string) => {
  store.dispatch('SET_ORDERING', el);
  closePopup();
};

onClickOutside(sortRef, () => closePopup());
</script>

<style scoped lang="scss">
.c-popup {
  position: absolute;
  top: 120%;
  right: 8px;
  width: 10vw;
  height: fit-content;
  padding: 10px 0;
  background-color: $white;
  color: $gray-darker;
  z-index: 10;

  &__item {
    padding: 4px 12px;
    cursor: pointer;

    &:hover {
      background-color: $secondary;
    }
  }
}

.active {
  color: $black;
}
</style>
