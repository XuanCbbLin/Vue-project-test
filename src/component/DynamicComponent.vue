<template>
  <button v-for="tab in tabs" :key="tab" @click="currentTab = tab.component">
    {{ tab.text }}
  </button>

  <component :is="currentTab" />
</template>

<script setup>
import { reactive, ref } from "vue";
import Post from "../component/Post.vue";
import Post2 from "../component/Post2.vue";

const currentTab = ref(Post);

const tabs = reactive([
  { text: "Post", component: Post },
  { text: "Post2", component: Post2 },
]);
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>
