<template>
  <div id="detailPage">
    <header>
      <el-page-header @back="goBack" content="百科🐢"></el-page-header>
    </header>
  </div>
</template>
<script>
export default {
  naem: "Detail",
  data() {
    return {};
  },
  created() {
    console.log(this);
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
  },
};
</script>
<style scope lang="less">
#detailPage {
  width: 100%;
  height: 100%;
  header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    background: #eee;
    padding: 0 35px;
  }
}
</style>