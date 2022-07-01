<template>
  <!-- <router-link to="/">Home</router-link> | -->
  <!-- <router-link to="/about">About</router-link> -->

  <DynamicComponent />

  <!-- <router-view /> -->
</template>

<script>
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import DynamicComponent from "./component/DynamicComponent.vue";

export default {
  components: {
    Home,
    About,
    DynamicComponent,
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

<style>
.router-link-active {
  color: red;
}

.router-link-exact-active {
  color: darkorange;
}
</style>
