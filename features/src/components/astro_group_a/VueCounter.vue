<template>
  <div class="counter bg-red-400">
    <button @click="subtract()">-</button>
    <pre>{{ count }}</pre>
    <button @click="add()">+</button>
  </div>
  <div class="children bg-red-400">
    <slot />
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const count = ref(0);
    const add = () => (count.value = count.value + 1);
    const subtract = () => (count.value = count.value - 1);

    return {
      count,
      add,
      subtract,
    };
  },
};
</script>