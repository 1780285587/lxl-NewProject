<template>
 <div></div>
</template>

<script lang='ts'>
import { defineComponent,reactive,onBeforeMount,onMounted,ref,toRefs,watch,computed} from 'vue'
interface DataProps {}
export default defineComponent({
name: '',
setup(context,{emit}) {
  const data: DataProps = reactive({

  })
  onBeforeMount(() => {
  })
  onMounted(() => {
  })
  const refData = toRefs(data);
  return {
    ...refData,
  }

 }
});
</script>
<style lang="scss" scoped>
</style>