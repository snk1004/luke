<template>
    <div class="new_vue_3.0">
      <div class="reac—tive">
        <!-- {{state.count}} -->
      </div>
      <!-- <button @click="state.count++">button</button> -->
    </div>
</template>
<script>
import { ref, reactive } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    let state = reactive({count: 0})
    const change = () => state.count++
    return { state, change }
  }

}
</script>