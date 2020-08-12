<template>
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
              </el-submenu> -->
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
      <div class="content_left">
        <div class="banner">
          <el-carousel :interval="6000" type="card" height="300px" :autoplay="true">
            <el-carousel-item v-for="item in bannerList" :key="item.id">
              <img :src="item.imgsrc " alt="" style="width: 100%;height: 100%;object-fit: cover;">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="container">
          <div class="list_box">
            <div class="list" v-for="item in 5" :key="item">
              <div class="list_top">
                <div class="list_left">
                  <p>前言 vue构建的项目中，vuex的状态存储是响应式的，当vue组件从store中读取状态的时候，若store中的状态发生变化</p>
                </div>
                <div class="list_right">
                  <img src="../assets/images/mylogo.jpg" alt="">
                </div>
              </div>
              <div class="list_mess">
                <li><i class="icon-user icon"></i><span>一条小咸鱼</span></li>
                <li><i class="icon-favo icon"></i><span>3</span></li>
                <li><i class="icon-talk icon"></i><span>23</span></li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content_right">
        <div class="the_date">
          <el-calendar v-model="value"></el-calendar>
        </div>
      </div>
    </section>
    <footer>
      <span class="version">版本号：1.0.0</span>
    </footer>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      value: new Date(),
      bannerList: [{imgsrc:require("../assets/images/banner/banner2.jpg"),id:"001"},{imgsrc:require("../assets/images/banner/banner3.jpg"),id:"002"},{imgsrc:require("../assets/images/banner/banner4.jpg"),id:"003"}]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less">
.wrap {
  width: 100%;
  background: #eee;
  header {
    width: 100%;
    min-width: 960px;
    margin: auto;
    height: 60px;
    line-height: 60px;
    padding: 0 50px;
    background: #ffffff;
    display: flex;
    border-bottom: 1px solid #ddd;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    .head_left {
      display: flex;
      align-items: center;
      padding-right: 60px;
      .logo {
        width: 50px;
        height: 50px;
        padding: 5px;
      }
      span {
        font-size: 20px;
        font-weight: 550;
        color: #333;
      }
    }
  }
  section {
    max-width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-top: 80px;
    display: flex;
    .content_left {
      width: 70%;
      box-shadow: 3px 6px 9px 3px rgba(0, 0, 0, 0.2);
      background: #fff;
      margin-right: 25px;
      .banner {
        padding-top: 20px;
        .el-carousel__item h3 {
          color: #475669;
          font-size: 14px;
          opacity: 0.75;
          line-height: 200px;
          margin: 0;
        }
        .el-carousel__item:nth-child(2n) {
          background-color: #99a9bf;
        }
        .el-carousel__item:nth-child(2n + 1) {
          background-color: #d3dce6;
        }
        .el-carousel__indicators--outside {
          display: none;
        }
        .el-carousel__item--card.is-active{
          width: 600px;
          transform: translateX(0px) scale(1)!important;
        }
        .el-carousel__item{
          border-radius: 6px;
        }
      }
      .container{
        width: 100%;
        background: #fff;
        margin-top: 15px;
        .list_box{
          display: flex;
          flex-direction: column;
          padding: 15px;
          .list{
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 10px;
            .list_top{
              width: 100%;
              padding: 15px;
              display: flex;
              justify-content: space-between;
              box-sizing: border-box;
              .list_left{
                p{
                  font-size: 14px;
                  text-align: left;
                }
              }
              .list_right{
                width: 150px;
                margin-left: 10px;
                img{
                  width: 100px;
                  border: 1px solid #f6f7f8;
                  border-radius: 3px;
                }
              }
            }
            .list_mess{
              text-align: left;
              padding-left: 15px;
              li{
                height: 18px;
                line-height: 18px;
                padding-right: 15px;
                font-size: 12px;
                color: #b4b4b4;
                float: left;
                display: flex;
                align-items: end;
                i{
                  width: 16px;
                  height: 16px;
                  display: inline-block;
                }
                .icon{
                  background-position: 50% 50%;
                  background-size: 100% 100%;
                  padding-right: 5px;
                }
                span{
                  font-size: 12px;
                }
              }
              .icon-user{
                background: url('../assets/images/icon/user.svg')no-repeat;
              }
              .icon-favo{
                background: url('../assets/images/icon/xin.svg')no-repeat;
              }
              .icon-talk{
                background: url('../assets/images/icon/talk.svg')no-repeat;
              }
            }
          }
        }
      }
    }
    .content_right {
      // width: 40%;
      padding: 0 10px;
      flex: 1;
      background: #ffffff;
      .el-calendar__header {
        flex-wrap: wrap;
        padding: 10px 0;
        .el-calendar__title {
          padding: 10px 0;
        }
      }
      .el-calendar__body {
        padding: 0;
        .is-today {
          background-color: #208480;
          color: #fff;
        }
        .el-calendar-day {
          height: 50px;
        }
      }
    }
  }
  footer{
    width: 100%;
    height: 100px;
    padding: 35px 0;  
    .version{
      color: #7f8082;;
    }
  }
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
