<template>
  <div class="home">

    <div class="counter"
    :style="{ color: store.state.colorCode }"
    >{{ store.state.counter }}</div>

    <div class="buttons">
      <button @click="store.methods.decreaseCounter">–</button>
      <button @click="store.methods.increaseCounter">+</button>
    </div>

<hr>
  <SomeComponent />
  </div>
</template>

<script>
import { inject } from 'vue'

import SomeComponent from '@/components/SomeComponent.vue'

export default {
  name: 'HomeView',
  components: {
    SomeComponent
  },
  setup() {
    const store = inject('store')

    /* let counter = ref(0)      // we now move all of these into store.js
    const increaseCounter = function() {
      counter.value++
      console.log('increase pressed')
    }
    const decreaseCounter = function() {
      counter.value--
      console.log('decrease pressed')
    }  */
  
    return {
      store,   /*  increaseCounter, decreaseCounter, counter */
    }
  }
}
</script>


<style scoped>
div {margin-bottom: 10px;}
.counter {font-size: 80px;}
.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}

hr {margin: 30px auto;}
</style>