<template>
  <a href="/" @click.prevent="$router.push('/')">Home</a> |
  <a href="/about" @click.prevent="$router.push('/about')">About</a>

  <component :is="pathComponent[$route.fullPath]"></component>
</template>

<script>
import Home from "./views/Home.vue";
import About from "./views/About.vue";

export default {
  components: {
    Home,
    About,
  },
  setup() {
    const pathComponent = {
      "/": "Home",
      "/about": "About",
    };

    return {
      pathComponent,
    };
  },
};
</script>

<style></style>
