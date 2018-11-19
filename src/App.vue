<template>
  <div id="app">
    <div class="header">
      <el-carousel height="250px">
          <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
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
.el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
.container{
  width: 85%;
  margin: 0 auto;
}
.main{
  margin-top: 18px;
  /* padding: 0 20px; */
}
.main .leftMess{
  float: left;
  /* background: green; */
  height: 500px;
  width: 67%;
}
.main .rightMess{
  width: 30%;
  float: right;
  /* background: gray; */
  /* height: 500px; */
}
.footer{
  clear: both;
}
</style>
