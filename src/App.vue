<template>
  <div id="app">
    <!-- ref初体验 -->
   <!-- <refVue /> -->
   <!-- reactive初体验 -->
   <!-- <reactiveVue /> -->
   <!-- watch初体验 -->
   <!-- <watchVue /> -->
   <!-- 模块化开发(相当于vue2的mixins) -->
   <UseCommon />
  </div>
</template>

<script lang="ts">
import { defineComponent,ref, computed } from "vue";
import refVue from "@/components/ref.vue";//ref初体验组件
import reactiveVue from "@/components/reactive.vue"//reactive初体验组件
import watchVue from "@/components/watch.vue"
import UseCommon from "./components/useCommon.vue";
export default defineComponent({
  name: "App",
  components: { refVue, reactiveVue, watchVue, UseCommon },
  setup() {
  }
});
</script>

<style>
</style>