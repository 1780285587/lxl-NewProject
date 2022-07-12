<template>
  <div>
    父组件的lang的值{{lang}}
    <fatherSonProvide />
    <button @click="changLang('bbb')">bbb</button>
    <button @click="changLang('ccc')">ccc</button>
  </div>
</template>

<script lang='ts'>
// 引用provide   注意：main.ts里createApp所创造出的变量也包含provide这个方法（请看main.ts）
import { reactive, toRefs, onBeforeMount, onMounted, provide,ref } from "vue";
import fatherSonProvide from '@/components/provide.vue'
interface DataProps {}
export default {
  name: "",
  components:{ fatherSonProvide },
  setup() {
    const lang = ref('aaa');
    // provide两个参数：1.事件名 2.传递的值
    provide('language',lang)
    const changLang = (val:string) =>{
      lang.value = val
    }
    onBeforeMount(() => {});
    onMounted(() => {});
    return {
      lang,
      changLang
    };
  }
};
</script>
<style scoped>
</style>