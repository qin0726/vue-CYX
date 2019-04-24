<template>
  <div id="home">
   <div class="swiper">
     <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item,index) of pics" :key=index>
         <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
   </div>
   <div class="frist-floor">
     <img src="../../static/img/20190326161910.jpg" alt="">
   </div>
   <div class="second-floor">
     <img src="../../static/img/1506667264268702862.jpg" alt="">
     <img src="../../static/img/1506564039148036883.png" alt="">
   </div>
   <div class="three-floor">
     <img src="../../static/img/001.jpg" alt="">
     <img src="../../static/img/002.jpg" alt="">
     <img src="../../static/img/003.jpg" alt="">
     <img src="../../static/img/004.jpg" alt="">
   </div>
   <div class="four-floor">
     <img src="../../static/img/1537923200693334039.jpg" alt="">
     <img src="../../static/img/1537922729005285316.jpg" alt="">
   </div>
   <div class="four-floor">
     <img src="../../static/img/1537926275081955315.jpg" alt="">
     <img src="../../static/img/1537925531159161300.jpg" alt="">
   </div>
   
     
  </div>
</template>

<script>
 import banner_1 from '../../static/img/20190326161117.jpg';
  import banner_2 from '../../static/img/20190326161138.jpg';
  import banner_3 from '../../static/img/20190326161235.jpg';
  import banner_4 from '../../static/img/20190326161823.jpg';
export default {
  name: 'home',
  data(){
    return {
      pics:[
        banner_1,banner_2,banner_3,banner_4
        ]

    }
  },
  methods:{
    
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{width:100%;margin:0 auto;}
#home>.swiper img{
  width:100%;
  height: 100%;
}
#home>.frist-floor>img{
  margin-top:10px;
  width:100%;
}
#home>.second-floor{
  display: flex;
}
#home>.second-floor>img:first-child{
  width:60%
}
#home>.second-floor>img:last-child{
  width:40%
}
#home>.three-floor{
  width:100%;
  display: flex;
  justify-content: space-between;
}
#home>.three-floor>img{
  width:24%
}
#home>.three-floor>img:hover{
  transition: 1s;
  transform: scale(1.05)
}
#home>.four-floor{
  display: flex;
}
#home>.four-floor>img:first-child{
  width:40%
}
#home>.four-floor>img:last-child{
  width:60%
}
</style>
