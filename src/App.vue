<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>

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
