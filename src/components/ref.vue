<template>
  <div id="ref">
    ref
    <h1>count:{{count}}</h1>
    <h2>count2:{{count2}}</h2>
    <button @click="add"> +1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref, computed } from "vue";
export default defineComponent({
  name: "ref",
  components: { },
  setup() {
    const count = ref(1);
    /* computed一定要return */
    const count2 = computed(() => {
      return count.value * 2
    });
    const add = ()=>{
      count.value++
    }
    return {
      count,
      count2,
      add
    };
  }
});
</script>

<style>
</style>