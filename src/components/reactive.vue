<template>
<div>
  reactive
  <h1>count:{{count}}</h1>
  <h2>count2:{{counts}}</h2>
  <button @click="methods"> +1</button>
  <div v-for="(item,index) in numbers" :key="index">
    {{item}}
  </div>
  {{person.name}}
</div>
 
</template>

<script lang='ts'>
import { defineComponent,computed,reactive,toRefs,onBeforeMount,onMounted} from 'vue'
interface DataProps {
  count:number,
  methods:()=>void,
  counts:number,
  numbers:number[],
  person:{name?:string}

}
export default defineComponent({
    name: '',
      setup() {
        
        // 在reactive里面使用也要使用 data. 的方式 
         const data: DataProps = reactive({
            count:0,
            methods:()=>{
              data.count++
            },
            counts:computed(()=>{
              return data.count++
            }),
            numbers:[2,2,3],
            person:{}
         })
         onBeforeMount(() => {
         })
         onMounted(() => {
          // vue3直接更改数组和对象是可以的，vue2更改的话需要$set方法
          data.numbers[0] = 1;
          data.person.name = "夏明"
         })
        //  如果在模板中嫌 data. 的方式太复杂，可以使用toRefs方法来解决
         return {
            // data
            ...toRefs(data)
         }

      }
  });
</script>
<style scoped>
</style>