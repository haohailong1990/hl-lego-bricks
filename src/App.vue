<template>
  <div>
    <h1>幕课乐高标准模版</h1>
    <ul>
      <li>开箱即用</li>
      <li>typescript</li>
      <li>vue3</li>
      <li>支持tsx</li>
      <li>eslint</li>
      <li>简单易用可扩展</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export interface TestProps {
  name:string
}
export default defineComponent({
  name: 'App',
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul{
  width: 200px;
  margin:auto;
}
</style>
