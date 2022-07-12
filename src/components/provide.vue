<template>
  <div>
    子组件的lang的值{{lang}}
    main.ts里provide传递的值{{appReject && appReject.name}}
  </div>
</template>

<script lang='ts'>

import { defineComponent,reactive,onBeforeMount,onMounted,ref,toRefs,watch,computed,inject} from 'vue'
interface DataProps {}
export default defineComponent({
   name: '',
   setup() {
    // inject接受的值必须和provide定义的事件值相同
    const lang = inject('language')
    const appReject = inject<{name:string}>('appProvide')
    onBeforeMount(() => {
    })
    onMounted(() => {
    })
    return {
      lang,
      appReject
    }

   }
});
</script>
<style scoped>
</style>