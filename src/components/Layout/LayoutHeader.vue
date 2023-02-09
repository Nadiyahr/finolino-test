<template>
  <header class="header">
    <nav>
      <div>
        <button></button>
        <button></button>
        <svg class="header__brand">
          <use
            href="/src/assets/icons/icons_list.svg#finolono"
            width="45"
            height="44"
            viewBox="0 0 45 44"
          ></use>
        </svg>
        <div>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        </div>
      </div>
    </nav>
    <Portal target="#breadcrumbs-target" />
    <Portal target="#title-target" />
    <Portal target="#filter-target" />
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: $bg-black;
}
</style>
