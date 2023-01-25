<template>
  <header class="header">
    <h1 class="header-title">HOME</h1>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  height: 44px;
  background-color: $gray-100;
  text-align: center;
  padding: calc(env(safe-area-inset-top) + 8px) 0 0 0;
}

.header-title {
  line-height: 44px;
}
</style>
