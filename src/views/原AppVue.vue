<template>
  <div>
    <div>{{count}}</div>
    <div>{{count2}}</div>
    <div>循环数组</div>
    x:{{x}}
    y:{{y}}
    <!-- <ul>
      <li v-for="(item,index) in numbers" :key="index">我是序号{{index}},我显示{{item}}</li>
    </ul>
    <br />
    <div>循环对象{{person.name}}</div>
    <ul>
      <li v-for="(value,key,index) in person" :key="index">{{key}}:{{value}}</li>
    </ul>-->
    {{getting}}
    <button @click="add">+2</button>
    <button @click="push">增加点数据</button>
    <button @click="upDateGetting">更新</button>
    <button @click="undateMouse">定点</button>
    <div>{{result}}</div>
    ??{{result}}
    <img v-if="result" :src="result[0].url" alt />
    <modal>我是modal</modal>
    <!-- <div v-else>等一会吧</div> -->
  </div>
</template>
                                                
<script lang="ts">
import { mouse } from "./hooks/useMethods";
import useURLLoader from "./hooks/useAxios";
import modal from "@/components/HelloWorld.vue";
import {
  ref,
  computed,
  reactive,
  toRefs,
  onMounted,
  onUnmounted,
  onUpdated,
  onRenderTriggered,
  watch
  // component
} from "vue";
// import component from "*.vue";
interface dataInterface {
  count: number;
  add: () => void;
  count2: number;
  numbers: any[]; //类型定义
  //numbers: Array<any>  数组泛型定义数组
  person: {
    age?: number | string;
    name?: string;
  };
}
interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}
// interface resInterface {
//   resData:string
// }
export default {
  components: {
    modal
  },
  setup() {
    // console.log(
    //   "setup",
    //   await axiosDog("https://dog.ceo/api/breeds/image/random")
    // );

    let { result } = useURLLoader<CatResult[]>(
      "https://api.thecatapi.com/v1/images/search?limit=1"
    );
    // console.log("result", result.value[0].url);
    // console.log("23131", resData);'
    let result1 = reactive({});
    watch(result, () => {
      if (result.value) {
        console.log(result.value[0].url);
      }
    });
    onMounted(async () => {
      // console.log(1111111);
      // console.log(
      //   "22222",
      //   await axiosDog("https://dog.ceo/api/breeds/image/random")
      // );
      // let result = ref(0);
      // console.log(
      //   "ewqeqeq",
      //   await useURLLoader("https://dog.ceo/api/breeds/image/random")
      // );
      // result1 = await useURLLoader("https://dog.ceo/api/breeds/image/random")
      //   .result;
      // console.log("result1", result1);
      // var { resData } = await useURLLoader(
      //   "https://dog.ceo/api/breeds/image/random"
      // );
      // console.log("resData", resData);
      // console.log(useURLLoader("https://dog.ceo/api/breeds/image/random"));
      // axiosDog("https://dog.ceo/api/breeds/image/random").then(res => {
      //   console.log("111", res);
      // });
    });
    // onUnmounted(() => {
    //   document.removeEventListener("click", undateMouse);
    // });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onRenderTriggered(event => {
      console.log(event);
    });
    const data: dataInterface = reactive({
      count: 0,
      add: () => {
        data.count++;
      },
      count2: computed(() => {
        return data.count * 2;
      }),
      numbers: [],
      person: {}
    });
    // data.numbers[0] = 1;
    // const person = ref({});
    const push = () => {
      // data.numbers.push("哈哈");
      // data.person.name = "小明";
      // data.person.age = "12";
      // person.value.name = "xi";
      // (person.value as any).name = "小明";
      // (person.value as any).age = "12";
      // person.value["name"] = "小明";
      // person.value["age"] = "12";
      // let { value } = person;
      // value["name"] = "xi";
      // console.log(person.value);
    };
    // const a = ref(data.count * 3);
    // const count = ref(0);
    const getting = ref("你好");
    // const count2 = computed(() => {
    //   return data.count * 2;
    // });
    const upDateGetting = () => {
      getting.value += "哈哈";
      data.count++;
    };
    watch([getting, () => data.count], (newValue, oldValue) => {
      // document.title = `新的${getting.value}`;
      console.log("newValue", newValue);
      console.log("oldValue", oldValue);
    });
    const shuzu = reactive([]);
    watch(
      () => shuzu,
      (newValue, oldValue) => {
        console.log("newValue", newValue);
        console.log("oldValue", oldValue);
      }
    );
    // const add = () => {
    //   data.count++;
    // };
    // const debounce = (func: any, ms: any) => {
    //   let timer: any = null;
    //   function reTimer() {
    //     //重新计时
    //     console.log("reTimer");
    //     clearTimeout(timer);
    //     timer = setTimeout(func, ms);
    //   }
    //   return reTimer;
    // };
    // const throttleGen = (fn: any, delay: number) => {
    //   let timer: any = null;
    //   function throller() {
    //     if (timer === null) {
    //       timer = setTimeout(()=>{
    //         fn() as any;
    //         timer as any = null;
    //       }, delay);
    //     }
    //   }
    //   return throller;
    // };
    // const handle = (e: any) => {
    //   console.log("e", e);
    //   // 获取页面中鼠标的x,y坐标；
    //   let x = e.pageX;
    //   let y = e.pageY;
    // };
    // //设置鼠标移动监听事件，要以整个document为对象；
    // document.addEventListener("mousemove", e => {
    //   console.log("e", e);
    //   // 获取页面中鼠标的x,y坐标；
    //   // let x = e.pageX;
    //   // let y = e.pageY;
    //   // 给图片设置位置
    // });
    // document.addEventListener("mousemove", handle(e));
    // const x = ref(0);
    // const y = ref(0);
    // const undateMouse = e => {
    //   x.value = e.pageX;
    //   y.value = e.pageY;
    // };

    return {
      shuzu,
      // result
      result,
      // result
      // ...toRefs(data),
      ...toRefs(result1)
    };
  }
};
</script>

<style>
</style>