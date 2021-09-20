<template>
   
  <div class="counter">
      <button @click="subtract()">-</button>
      <pre>{{ count }}</pre>
      <pre>{{ msg }}</pre>
      <button @click="add()">+</button>
  </div>

  <div class="children">
      <slot />
  </div>
</template>

<script>
import { ref } from 'vue';


export default {
  setup() {
    const count = ref(0)
    const msg="大鳥"
    const add = () => count.value = count.value + 1;
    const subtract = () => count.value = count.value - 1;
    return {
      count,
      add,
      subtract,
      msg
    }
  }
}
</script>