<script>
import { inject } from 'vue'

export default {
  setup() {
    const store = inject('store')
    return {
      store
    }
  },
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>


    <div class="flex">
      <p>this is the counter from our Home Page: </p>
      <h2> {{ store.state.counter }}</h2>
    </div>
  </div>
</template>


<style scoped>

.flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
p, h2, h3 {margin:0}
h2 {line-height: 90%;}
</style>