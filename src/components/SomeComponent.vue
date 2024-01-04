<script>
import { inject, computed } from 'vue'

export default {
  setup() {
    const store = inject('store')

    const colorCode = computed({
      get() {
        return store.state.colorCode
      },
      set(newValue) {
        store.methods.setColorCode(newValue)
      }
    })

    return {
      store,
      colorCode
    }

  },
}
</script>

<template>
  hi there, I'm a child component



  <div class="counter-squared">
    {{ store.state.counter }}<sup>2</sup>
    =
    {{ store.getters.counterSquared() }}
  </div>

  <hr>

  <!-- <input type="text" placeholder="Enter color code" v-model="store.state.colorCode"> -->
  <input type="text" placeholder="Enter color code" v-model="store.state.colorCode">

</template>


<style scoped>
.counter-squared {
  font-size: 24px;
}

hr {margin: 30px auto;}

.counter-squared sup {
font-size: 14px;
}
</style>