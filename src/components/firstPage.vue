<template>
  <div id="FirstPage">
    <Reactive/>
    <div class="content_left">
      <div class="banner">
        <el-carousel :interval="6000" type="card" :autoplay="true">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgsrc " alt="" style="width: 100%;height: 100%;object-fit: cover;">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="container">
        <div class="list_box">
          <div class="list" v-for="item in contentList" :key="item.id">
            <div class="list_top" @click="toDetail(item)">
              <div class="list_left">
                <p>{{item.context}}</p>
              </div>
              <div class="list_right">
                <img :src="item.imgurl?require('../assets/images/imglist/'+item.imgurl):defaulturl" alt="">
              </div>
            </div>
            <div class="list_mess">
              <li><i class="icon-user icon"></i><span>{{item.writer}}</span></li>
              <li><i class="icon-favo icon"></i><span>{{item.favorite}}</span></li>
              <li><i class="icon-talk icon"></i><span>{{item.comment}}</span></li>
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
  </div>
</template>

<script>
import axios from "axios";
import Reactive from '../components/reactive';
export default {
  data() {
    return {
      value: new Date(),
      bannerList: [{imgsrc:require("../assets/images/banner/banner2.jpg"),id:"001"},{imgsrc:require("../assets/images/banner/banner3.jpg"),id:"002"},{imgsrc:require("../assets/images/banner/banner4.jpg"),id:"003"}],
      contentList: [],
      defaulturl: require('../assets/images/mylogo.jpg'),
      requireUrl: []
    };
  },
  components: {
    Reactive
  },
  created() {
    this.getRenData();
  },
  methods: {
    getRenData(){
      axios.get('/api/dataList').then(res=>{
        for(var i=0;i<res.data.data.length;i++){
          this.requireUrl.push(res.data.data[i].imgurl);
        }
        this.contentList = res.data.data;
      }).catch(error=>{
        console.log(error);
      });
    },
    toDetail(data){
      this.$router.push('/detail')
    }
  },
};
</script>

<style lang="less">
@media screen and (max-width: 600px) {
  section{
    padding-top: 60px!important;
  }
  #FirstPage{
    display: block!important;
    .content_left{
      width: 100%;
      margin-right: 0px;
      .banner .el-carousel__item--card.is-active {
        width: 350px;
      }
      .el-carousel__container{
        height: 200px;
      }
      .list_box{
        padding: 5px!important;
      }
    }
  }
}
.wrap {
  width: 100%;
  background: #eee;
  #FirstPage{
    display: flex;
    width: 960px;
  }
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
                width: 100%;  
                p{
                  font-size: 14px;
                  text-align: left;
                  text-indent:2em;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 3;
                  overflow: hidden;
                  line-height: 22px;
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
          .list:last-child{
            border-bottom: 0;
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
