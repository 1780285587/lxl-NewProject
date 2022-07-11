import { ref } from 'vue'
import axios from 'axios'
// 添加一个参数作为要使用的 地址
function useURLLoader<T>(url: string) {
  // 声明几个ref，代表不同的状态和结果
  const result = ref<T | null>(null)
  const loading = ref(true)
  const loaded = ref(false)
  const error = ref(null)

  // 发送异步请求，获得data
  // 由于 axios 都有定义，所以rawData 可以轻松知道其类型
  axios.get(url).then((rawData) => {
    loading.value = false
    loaded.value = true
    console.log('rawData', rawData)
    result.value = rawData.data
  }).catch((e) => {
    error.value = e
  })
  // 将这些ref 一一返回
  return {
    result,
    loading,
    error,
    loaded
  }
}
export default useURLLoader
// export async function axiosDog(url: string) {
//   // let err = ref(null)
//   // let resData = ref(null)
//   // new Promise((resolve, reject) => {
//   // axios.get(url).then(res => {
//   //   console.log('res', res)
//   //   resData.value = res.data.message
//   //   console.log('resData.value', resData.value)
//   //   // return { resData }
//   //   // resolve(res)
//   // })
//   // })
//   let { status, data: resData } = await axios.get(url)
//   if (status === 200) {
//     console.log('函数里打印', resData)
//     return { resData }
//   } else {
//     // return alert('请求dog失败！')
//     return { 0: 1 }
//   }
// }
// export default const axiosDog = (url: string) => {
//   return axios.get(url).then(res => {
//     console.log('res', res)
//     // resData.value = res.data.message
//     // console.log('resData.value', resData.value)
//     // return { resData }
//     // return { resData }
//     // resolve(res)
//   })
// }
// export const aa = (url) => {
//   return axios.get(url)
// }