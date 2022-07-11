<template>
  <div>
    <h1>count:{{count}}</h1>
    <h1>count2:{{count2}}</h1>
    <button @click="add">+1</button>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  computed
} from "vue";
interface DataProps {}
export default {
  name: "",
  setup() {
    const count = ref(0);
    const count2 = computed(() => {
      return count.value * 2;
    });
    const add = () => {
      count.value++;
    };
    onBeforeMount(() => {});
    onMounted(() => {});
    return {
      count,
      count2,
      add
    };
  }
};
</script>
<style scoped>
</style>