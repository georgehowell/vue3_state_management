import { reactive, readonly } from "vue"

const state = reactive({
   counter: 0,
   colorCode: 'blue'
})

const methods = {
  increaseCounter() {
    state.counter++
  },
  decreaseCounter() {
    state.counter--
  },
  setColorCode(newValue) {   // see: "readonly(state)" below
    state.colorCode = newValue  // force color change via computed.set.newValue
  }
}

const getters = {
  counterSquared() {
    return state.counter * state.counter
  }
}

export default {
/*  state: readonly(state),  // protect our state from outside mutations  */
  state,
  methods, 
  getters
}
