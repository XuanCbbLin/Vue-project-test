<template>
  <component :is="isDisabled ? 'span' : 'router-link'" :class="{ 'cursor-not-allowed': isDisabled }" to="/about"> About2</component> |

  <router-link to="/about" custom v-slot="{ navigate, href }">
    <span v-if="isDisabled" class="cursor-not-allowed">about</span>
    <a v-else :href="href" @click="navigate">about</a>
  </router-link>
</template>

<script setup>
const isDisabled = true;
</script>
