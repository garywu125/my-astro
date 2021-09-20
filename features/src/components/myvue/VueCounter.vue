<template>
  <div class="counter bg-green-300">
    <button @click="subtract()">-</button>
    <pre>{{ count }}</pre>
    <button @click="add()">+</button>
     <button @Click="worldGreeting()">say hello</button>
      <button @Click="twGreeting()">sayhi</button>
  </div>
  <div class="children bg-green-300">
    <slot />
  </div>
</template>

<script>
import { ref } from 'vue';
// js_utility share code to different frontend js component
import { sayHello,sayHi } from '../../js_utility/greeting';
export default {
  setup() {
    const count = ref(0);
    const add = () => (count.value = count.value + 1);
    const subtract = () => (count.value = count.value - 1);
    const worldGreeting=()=>sayHello('world');
    const twGreeting=()=>sayHi('你好');
    return {
      count,
      add,
      subtract,
      worldGreeting,
      twGreeting
    };
  },
};
</script>