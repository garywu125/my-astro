<template>
  <h1>{{ msg }}</h1>
  <div>
    <slot />
  </div>
</template>

<script >
export default {
  setup() {
    const msg = 'v3 single file component support !!! '
    return {
      msg
    }
  }
}
</script>