<template>
  <h1>Home</h1>
  <button @click="plusAdd">add</button>
</template>

<script>
import { ref } from "vue";
import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import qs from "qs";
export default {
  setup() {
    const count = ref(0);
    const count2 = ref(0);
    const $route = useRoute();
    const url = { city: "台北市", districts: "大安區", notifyCycle: "Day", notifyEnable: "true", page: "1" };

    console.log(qs.stringify({ ...url }));
    console.log(JSON.stringify({ ...url }));

    const plusAdd = () => {
      count.value += 1;
    };

    // watchEffect(() => {
    //   console.log(count.value);
    //   console.log(count2.value);
    //   console.log({ ...$route });
    // });

    return {
      plusAdd,
      count,
      count2,
    };
  },
};
</script>

<style></style>
