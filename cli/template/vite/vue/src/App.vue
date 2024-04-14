<template>
  <div class="app">{{ welcome }}</div>
  <child />
</template>

<script setup>
import { ref } from 'vue';
import Child from './Child.vue';

const welcome = ref('hello vite & vue!');

</script>

<style scoped>
@import './App.less';

.app {
  margin: 30px;
  font-size: 30px;
  font-weight: 600;
}
</style>
