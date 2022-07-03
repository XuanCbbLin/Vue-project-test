<template>
  <a
    :href="value"
    v-for="(value, key) in Routes"
    :key="key"
    :class="{ 'text-red-600': $route.path === value }"
    @click.prevent="$router.push(`${value}`)"
    >{{ key }}</a
  >
  <router-view />
</template>

<script setup>
const Routes = {
  Home: "/",
  About: "/about",
};
</script>
