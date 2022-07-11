import { onMounted, onUnmounted, ref } from 'vue'
export function mouse() {
  let x = ref(0);
  let y = ref(0);
  const undateMouse = e => {
    x.value = e.pageX;
    y.value = e.pageY;
  };
  onMounted(() => {
    document.addEventListener("click", undateMouse);
  });
  onUnmounted(() => {
    document.removeEventListener("click", undateMouse);
  });
  return { x, y }
}