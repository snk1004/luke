<template>
  <div class="home">
    <FirstPage msg="Welcome to luke"/>
  </div>
</template>

<script>
import FirstPage from '@/components/firstPage.vue'
console.log('=== 欢迎使用 路可 ===')

export default {
  name: 'Home',
  components: {
    FirstPage
  }
}
</script>
<style lang="less">
  .home{
    width: 100%;
    height: 100%;
  }
</style>
