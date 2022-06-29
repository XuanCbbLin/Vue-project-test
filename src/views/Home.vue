<template>
  <h1>Home</h1>
  <button @click="plusAdd">add</button>
</template>

<script>
import { ref } from "vue";
import { watchEffect } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const count = ref(0);
    const count2 = ref(0);
    const $route = useRoute();

    const plusAdd = () => {
      count.value += 1;
    };

    watchEffect(() => {
      console.log(count.value);
      console.log(count2.value);
      console.log({ ...$route });
    });

    return {
      plusAdd,
      count,
      count2,
    };
  },
};
</script>

<style></style>
