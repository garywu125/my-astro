<template>
<div>
    <h2>{{title}}</h2> 
    <time>{{time}}</time>
    <p>{{description}}</p>
    <button @click="increaseThumbsUp()">👍</button><button disabled>{{thumbsUp}}</button>
    <button @click="increaseThumbsDown()">👎</button><button disabled>{{thumbsDown}}</button>
 </div>
</template>


<script>
export default {
  props: ['title','time','description'],
  data() {
    return {
      thumbsUp: 0,
      thumbsDown: 0,
      lastname: "Frühwacht",
      firstname: "Jan",
    }
  },
  computed: {
    speakerName() {
      return `${this.firstname} ${this.lastname}`
    }
  },
  methods: {
    increaseThumbsUp() {
      this.thumbsUp++;
    },
    increaseThumbsDown() {
      this.thumbsDown++;
    }
  }
}
</script>