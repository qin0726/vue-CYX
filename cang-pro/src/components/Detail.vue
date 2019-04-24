<template>
    <div id="detail">
        <div class="detail-aside">
              <p>热销排行版</p>
              <ul>
                <li>
                    <span>TOP1</span>
                    <img src="../../static/img/5_thumb_g_1478052188894.jpg" alt="">
                    <span class="pro-title">藏忆富氢杯</span>
                    <span class="pro-price">￥699</span>
                    <br style="clear:both">
                </li>
                <li>
                    <span>TOP2</span>
                    <img src="../../static/img/40_thumb_g_1537435315097.jpg" alt="">
                    <span class="pro-title">氢敷面膜</span>
                    <span class="pro-price">￥199</span>
                    <br style="clear:both">
                </li>
                <li>
                    <span>TOP3</span>
                    <img src="../../static/img/39_thumb_g_1500005625430.jpg" alt="">
                    <span class="pro-title">藏忆氢氢杯</span>
                    <span class="pro-price">￥899</span>
                    <br style="clear:both">
                </li>
            </ul>        
          </div>
        <h3>新品补水仪纳米富氢携带,订单详情{{lid}}</h3>
        <div class="detail-header">
            <div class="title-pic">
                 <img src="../../static/img/1537926275081955315.jpg" alt="">   
            </div>
            <div class="title-text">
              <div>销售价：<h2>￥{{det.dprice}}元</h2></div>  
              <div>品  牌：<span>{{det.brand}}</span></div>  
              <div>商品分类：<span>{{det.gocate}}</span></div>  
              <div>关键词语：<span>{{det.goid}}</span></div>  
              <div>商品简介：<span>{{det.intr}}</span></div>  
              <router-link to="/buy">立即购买</router-link>
            </div>
        </div>
        <div class="detail-sub">
            <ul>
                <li>商品详情</li>
            </ul>
            <div>
                <p>产品名称：藏忆毛孔清洁器脸部电动黑头仪小气泡粉刺</p>
                <p>品牌：藏忆强吸力拔火罐神器包邮</p>
            </div>
        </div>
        <div class="detail-pic">
            <img src="../../static/img/20180920175159_14418.jpg" alt="">
            <img src="../../static/img/20190326160743.jpg" alt="">
            <img src="../../static/img/20190326160806.jpg" alt="">
            <img src="../../static/img/20190326162547.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:"detail",
    data(){
        return{
            lid:'',
            det:{did:1,dprice:"123",brand:"藏忆",gocate:"富氢系列",goid:"ESC00045",word:"富氢 保健 抗氧化",intr:"本产品具有抗老化皮肤，对皮肤起到保养作用"},
        }
    },
    methods:{
        get(){
            this.lid=this.$route.params.lid;
        },
        loadDetails(){
            this.axios.get(
                "http://localhost:3000/details"
            ).then(res=>{
                console.log(res.data);
                this.det=res.data[0]
            })
        },
        
    },
    created(){
        this.get();
        this.loadDetails();
    }
}
</script>
 <style>
 #detail{position: relative;}
 #detail h3{
     text-align: left;
 }
 #detail h2{
  display:inline;

 }
 #detail .title-pic{
     width:30%;
 }
 #detail .title-pic img{
     border:1px solid red;
     width:100%;
     height:400px;
 }
 #detail .detail-header{
     display: flex;
 }
 #detail .detail-header .title-text{

     display: flex;
     flex-direction: column;
     text-align: left;
     
 }
 #detail .title-text div{
     padding:15px;
 }
 #detail .title-text span{
     color:#777;
     font-size:0.9rem;
 }
 #detail .title-text a{
     position: relative;
     top:30px;
     background:skyblue;
     text-align: center;
     color:#fff;
     font-weight: bold;
     border-radius: 5px;
     margin:0 auto;
     width:30%;
     padding:10px 20px;
 }
 #detail .detail-sub{
     width:80%;
 }
 #detail .detail-sub ul{
     border:1px solid #ddd;
     height:40px;
     text-align: left;
 }
 #detail .detail-sub ul>li{
     border-right:1px solid #DDD;
     border-top:3px solid red;
     width:20%;
     height:100%;
     color:red;
     text-align: center;
     line-height: 40px;
 }
 #detail .detail-sub>div{
     border:1px solid #ddd;
     text-align: left;
     padding:10px 15px;
     color:#777;
     font-size:0.8rem;
 }
 #detail .detail-sub>div p{
     margin:10px 0;
 }
 
 #detail .detail-pic{
     width:80%;
 }
 #detail .detail-pic>img{
     width:100%;
 }
 #detail .detail-aside{
     width:10%;
     position:fixed;
     right:15%;
     top:15%;
     display: flex;
     flex-direction: column;
 }
 #detail .detail-aside>p{
     background: skyblue;
     color:#fff;
     height: 40px;
     line-height: 40px;
     border-radius: 5px;
     font-size: 1rem;
     font-weight:bold;
     margin-bottom:5px;
     
 }
 #detail .detail-aside span:first-child{
     font-size:10px;
     width:40px;
     position: absolute;
     background: #ff4747;
     border-radius: 20px;
     padding:2px 3%;
     font-weight: bold;
     color:#fff;
     margin-top:5px;
     
 }
 #detail .detail-aside ul>li{
     width:90%;
     margin:0 auto;
     margin-top:10px;
     border:2px solid #ddd;
     padding:5px 0;
 }
 #detail .detail-aside ul>li:hover{
     transition: 0.5s;
     border-color:skyblue;
     transform: translateY(-5px);
 }
 #detail .detail-aside ul>li>img{
     margin:0 auto;
     margin-top:5px;
     width:85%
 }
  #detail .pro-title{
     font-size:0.8rem;
     font-weight:bold;
     color:#8d8c8c;
     float: left;
     margin-left:5%;
     margin-top:5px;
 }
 #detail .pro-title:hover{
     color:red;
 }
 #detail .pro-price{
     float: right;
     margin-right:5%;
     color:red;
     font-weight: bold;
     margin-top:5px;
     margin-bottom:5px;
 }

 </style>
 