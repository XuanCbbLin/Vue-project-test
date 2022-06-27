<template>
  <h1 class="text-yellow-600">About</h1>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script>
export default {};
</script>

<style></style>
