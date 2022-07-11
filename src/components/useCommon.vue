<template>
  <div>
    <h1>x:{{x}}</h1>
    <h1>y:{{y}}</h1>
  </div>
</template>

<script lang='ts'>
import { mouse } from '@/hooks/useMethods'
import { defineComponent,reactive,onBeforeMount,onMounted,onUnmounted,ref,toRefs,watch,computed} from 'vue'
interface DataProps {}
export default defineComponent({
   name: '',
   setup() {
    /* 模块化的妙用
       需求：点击屏幕，得出当前坐标
       如果多个组件都要用到这项功能，提取到一个公用文件hooks
    */
    // ================================================================
    // const x = ref(0)
    // const y = ref(0)
    // const usemousePosition = (e:MouseEvent) =>{
    //   x.value = e.pageX;
    //   y.value = e.pageY
    // }
    // onMounted(()=>{
    //   document.addEventListener('click',usemousePosition)
    // })
    // onUnmounted(()=>{
    //   document.removeEventListener('click',usemousePosition)
    // })
    // ================================================================
    const { x, y } = mouse()
    return {
      x,
      y
    }

   }
});
</script>
<style scoped>
</style>