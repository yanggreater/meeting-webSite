<template>
  <div id="app">
    <div class="header">
      <el-carousel height="250px">
          <el-carousel-item v-for="(item,index) in images" :key="index">
              <img :src="item"/>
          </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container">
        <div class="nav">
            <Nav></Nav>
        </div>
        <div class="main">
            <div class="leftMess">
                <router-view/>
            </div>
            <div class="rightMess">
                <tip-mess></tip-mess>
            </div>
        </div>
    </div>
    <div class="footer">
        <Footer></Footer>
    </div>
    

    
  </div>
</template>

<script>
import Nav from './components/common/nav.vue'
import Footer from './components/common/foot.vue'
import TipMess from './components/common/tipMess.vue'
export default {
  name: 'App',
  data(){
    return{
      images:[
        'http://www.yanggreater.club/photo/hzau1.jpg',
        'http://www.yanggreater.club/photo/yumi.jpg',
        'http://www.yanggreater.club/photo/hzau2.jpg',
        'http://www.yanggreater.club/photo/hzau3.jpg',
        'http://www.yanggreater.club/photo/mianhua.jpg',
        'http://www.yanggreater.club/photo/xiaomai.jpg',
        
      ]
    }
    
  },
  components:{
    Nav,
    Footer,
    TipMess
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.header{
  height: 250px;
  width: 100%;
  /* background-image: url('./assets/time.jpg'); */
}
.header .el-carousel .el-carousel__container img{
  height: 100%;
}
/* .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  } */
.container{
  width: 90%;
  margin: 0 auto;
  background: #fff;
}
.container .nav{
  width: 100%;
}
.main{
  margin-top: 18px;
  /* padding: 0 20px; */
}
.main .leftMess{
  float: left;
  /* background: green; */
  /* height: 500px; */
  padding-bottom: 100px;
  margin-bottom: 50px;
  width: 67%;
  background: rgb(255, 255, 255);
}
.main .rightMess{
  width: 30%;
  margin-bottom: 50px;
  padding-bottom: 40px;
  float: right;
  background: rgb(255, 255, 255);
  /* background: gray; */
  /* height: 500px; */
}
.footer{
  clear: both;
}
img{
  width: 100%;
}
</style>
