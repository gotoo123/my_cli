<template>
  <div class="app">{{ welcome }}</div>
  <child />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Child from './Child.vue';

const welcome = ref('hello vite & vue-ts!');
let a: number = 3;
a = [3];
console.log(a)

</script>

<style scoped>
@import './App.less';

.app {
  margin: 30px;
  font-size: 30px;
  font-weight: 600;
}
</style>
