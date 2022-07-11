<template>
  <div>
    <h1>1、watch监听ref普通响应对象</h1>
    <div>title:{{title}}</div>
    <div>titleComputed:{{titleComputed}}</div>
    <div>titleWatch:{{titleWatch}}</div>
    <button @click="changeTitle">改变title</button>
    <br />
    <h2>2、watch监听reactive响应式对象</h2>
    <div>{{count}}</div>
    <button @click="methods">count++</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent,reactive,onBeforeMount,onMounted,ref,toRefs,watch,computed} from 'vue'
interface DataProps {
  count:number,
  methods:()=>void,
  dataArr:number[]
}
export default defineComponent({
  name: '',
  setup() {
    /* 
    参数：参数一为监听的值，参数二为（newVal，oldVal）
    可以监听多个值，监听reactive对象时，必须为一个函数（匿名函数）
    */
    // 1、监听普通ref响应对象
    const title = ref('')
    const titleComputed = computed(()=>{
      return `我是${title.value}`
    })
    const titleWatch = ref('')
    watch(title,(newVal,oldVal)=>{
      console.log('oldVal',oldVal)
      console.log('newVal',newVal)
      titleWatch.value += `我是watch的newVal${title.value}`
    })
    const changeTitle = ()=>{
      title.value += '蔡'
    }

    // 2、监听reactive响应式对象且监听多个值(监听data对象中的count)
    const data: DataProps = reactive({
      count:10,
      methods:()=>{data.count++},
      dataArr:[1,2,3]
    })
    watch([data,()=>data.count],(newVal,oldVal)=>{
      console.log('oldVal',oldVal)
      console.log('newVal',newVal)
    })
    onBeforeMount(() => {
    })
    onMounted(() => {
    })
    return {
      title,
      titleComputed,
      titleWatch,
      changeTitle,
      ...toRefs(data)
    }
  }
});
</script>
<style scoped>
</style>