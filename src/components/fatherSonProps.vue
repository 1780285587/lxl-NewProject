<template>
  <teleport to="#modal">
    <div id="center" v-if="open">
      <h1><slot>this is a modal</slot></h1>
      <button @click="handleModal">关闭</button>
    </div>
  </teleport>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props:{
    // 控制弹出层显示
    open:{
      type:Boolean,
      default:false
    },  
    // 事件
    emits:{
      'close-modal':null
    }
  },
  setup(props,{emit}) {
    const handleModal = ()=>{
      emit('close-modal')
    }
    return {
      handleModal
    }
  },
})
</script>

<style>
  #center {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    background: white;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
  }
</style>
