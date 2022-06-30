<script setup></script>

<template>
  <a href="/" :class="{ active: $route.path === '/' }">Home</a>
  <a href="/about" :class="{ active: $route.path === '/about' }">about</a>
  <a href="/Posts" :class="{ active: $route.path === '/Posts' }">Posts</a>
  <!-- <router-link to="/">Home</router-link>
  <router-link to="/about">about</router-link>
  <router-link to="/Posts">Posts</router-link> -->
  <!-- <router-view /> -->
</template>

<style>
a {
  display: inline-block;
  margin-left: 15px;
}

.active {
  color: red;
}

/* .router-link-active {
  color: red;
} */
</style>
