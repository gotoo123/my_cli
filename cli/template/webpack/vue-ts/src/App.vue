<template>
  <div class="app">
    {{ welcome }}
  </div>
  <app-child />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import AppChild from './app-child.vue';

  const welcome = ref('hello vue world!');

</script>

<style scoped>
.app {
  margin: 30px;
  font-size: 30px;
  font-weight: 600;
}
</style>
