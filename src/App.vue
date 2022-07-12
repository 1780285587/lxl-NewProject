<template>
  <div id="app">
    <!-- ref初体验 -->
   <!-- <refVue /> -->
   <!-- reactive初体验 -->
   <!-- <reactiveVue /> -->
   <!-- watch初体验 -->
   <!-- <watchVue /> -->
   <!-- 模块化开发(相当于vue2的mixins) -->
   <!-- <UseCommon /> -->
   <!-- 父子组件传值初体验 -->
   <!-- <fatherSonProps :open="open" @close-modal="closeModal"/>
   <button @click="openModal">打开</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent,ref, computed } from "vue";
import refVue from "@/components/ref.vue";//ref初体验组件
import reactiveVue from "@/components/reactive.vue"//reactive初体验组件
import watchVue from "@/components/watch.vue"
import UseCommon from "./components/useCommon.vue";
import fatherSonProps from './components/fatherSonProps.vue'
export default defineComponent({
  name: "App",
  components: { refVue, reactiveVue, watchVue, UseCommon,fatherSonProps },
  setup() {
    /* 
    父子组件传值
    const open = ref(true)
    const closeModal = ()=>{
      open.value = false
    }
    const openModal = ()=>{
      open.value = true
    }
    */
    return {
      open,
      // closeModal,
      // openModal
    }
  }
});
</script>

<style>
</style>