<template>
  <div class="home">
    <div class="wrap">
      <header>
        <div class="head_left">
          <img class="logo" src="../assets/images/mylogo.png" alt />
          <span>路可</span>
        </div>
        <div class="head_right">
          <div class="menu_list">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-menu-item index="1">首页</el-menu-item>
              <el-submenu index="2">
                <template slot="title">分类</template>
                <el-submenu index="2-1">
                  <template slot="title">蛋龟</template>
                  <el-menu-item index="2-1-1">麝香属</el-menu-item>
                  <el-menu-item index="2-1-2">泥龟属</el-menu-item>
                </el-submenu>
                <el-menu-item index="2-2">草花喉</el-menu-item>
                <el-submenu index="2-3">
                  <template slot="title">鳄龟</template>
                  <el-menu-item index="2-4-1">真鳄龟</el-menu-item>
                  <el-menu-item index="2-4-2">拟鳄龟</el-menu-item>
                </el-submenu>
                <el-menu-item index="2-4">巴西脸</el-menu-item>
                <!-- <el-submenu index="2-5">
                  <template slot="title">其他</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>-->
              </el-submenu>
              <el-menu-item index="3" disabled>开发中...</el-menu-item>
              <!-- <el-menu-item index="4">
                <a href="https://www.ele.me" target="_blank"></a>
              </el-menu-item>-->
            </el-menu>
          </div>
        </div>
      </header>
      <section>
        <FirstPage :activeIndex="activeIndex" msg="Welcome to luke" />
      </section>
      <footer>
        <span class="version">版本号：1.0.0</span>
      </footer>
      <el-backtop></el-backtop>
    </div>
  </div>
</template>

<script>
import FirstPage from "@/components/firstPage.vue";
console.log("=== 欢迎使用 路可 ===");

export default {
  name: "Home",
  data() {
    return {
      activeIndex: "1",
    };
  },
  components: {
    FirstPage,
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less">
.home {
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 600px) {
  header{
    padding-left: 10px!important;
    height: 50px!important;
    .head_left{
      img{
        width: 35px!important;
        height: 35px!important;
      }
      span{
        padding-top: 3px;
      }
    }
    .head_right{
      display: none;
    } 
  }
}
</style>
