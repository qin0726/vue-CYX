<template>
    <div id="product">
        <div class="product-bread">
            <i class="icon iconfont  icon-zhuye" ></i>
            <span>当前位置：</span>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>产品展示</el-breadcrumb-item>
            </el-breadcrumb>
      </div>
      <div class="product-content">
          <div class="product-aside">
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
          <div class="product-main">
            <div class="pro-main-header">
                <div>
                    <span>商品筛选</span>
                    <span>重置筛选</span>
                </div>
                <div>分类：
                    <ul>
                         <li><a href="javascript:alert('正在建设中、、、')">富氢系列</a></li>
                        <li><a href="javascript:alert('正在建设中、、、')">按摩系列</a></li>
                        <li><a href="javascript:alert('正在建设中、、、')">美妆系列</a></li>
                        <li><a href="javascript:alert('正在建设中、、、')">净化系列</a></li>
                    </ul>
                </div>
                <div>品牌：
                    <ul>
                        <li><a href="javascript:alert('正在建设中、、、')">全部</a></li>
                        <li><a href="javascript:alert('正在建设中、、、')">藏忆</a></li>
                        <li><a href="javascript:alert('正在建设中、、、')">Dearfire</a></li>
                    </ul>
                </div>
            </div>
            <div class="pro-main-main">
                <ul>
                    <li v-for="(pro,i) in pros" :key=i>
                        <img :src="pro.pic" alt="">
                        <div>
                        <span class="pro-title">{{pro.title}}</span>
                        <span class="pro-price">￥{{pro.price}}</span>
                        <br style="clear:both">
                        <router-link :to="`detail/${pro.pid}`">查看详情</router-link>
                        </div>
                    </li>
                </ul>
            </div>   
          </div>
      </div>
    </div>
</template>

<script>
export default {
    name:"product",
    data(){
        return{
            pros:[
                {pid:1,title:"水滴款富氢杯",price:"1980",pic:"static/img/5_thumb_g_1478052188894.jpg"},
                {pid:2,title:"藏忆美颜棒",price:"198",pic:"static/img/10_thumb_g_1470715326777.jpg"},
                {pid:3,title:"水滴款富氢杯",price:"290",pic:"static/img/14_thumb_g_1470721394824.jpg"},
                {pid:4,title:"彩光嫩肤美塑仪",price:"3980",pic:"static/img/21_thumb_g_1537491152990.jpg"},
                {pid:5,title:"藏忆眼保仪",price:"580",pic:"static/img/28_thumb_g_1471916348976.jpg"},
                {pid:6,title:"绿色眼保仪",price:"980",pic:"static/img/29_thumb_g_1473215062453.jpg"},
                {pid:7,title:"水滴款富氢杯",price:"850",pic:"static/img/30_thumb_g_1479113327039.jpg"},
                {pid:8,title:"水滴款富氢杯",price:"980",pic:"static/img/33_thumb_g_1489369379710.jpg"},
                {pid:9,title:"水滴款富氢杯",price:"180",pic:"static/img/34_thumb_g_1479721265724.jpg"},
                {pid:10,title:"水滴款富氢杯",price:"280",pic:"static/img/35_thumb_g_1490248471008.jpg"},
                {pid:11,title:"纳米喷雾补水保湿仪",price:"190",pic:"static/img/37_thumb_g_1537435913349.jpg"},
                {pid:12,title:"水润保湿露",price:"170",pic:"static/img/39_thumb_g_1500005625430.jpg"},
                {pid:13,title:"氢敷面膜",price:"680",pic:"static/img/40_thumb_g_1537435315097.jpg"},
                {pid:14,title:"水滴款富氢杯",price:"780",pic:"static/img/41_thumb_g_1501552104961.jpg"},
                {pid:15,title:"眼部保健按摩仪",price:"380",pic:"static/img/42_thumb_g_1510105155952.jpg"},
                {pid:16,title:"眼部保健按摩仪",price:"580",pic:"static/img/43_thumb_g_1537435627947.jpg"},
                {pid:17,title:"眼部保健按摩仪",price:"480",pic:"static/img/44_thumb_g_1537436803736.jpg"},
                {pid:18,title:"眼部保健按摩仪",price:"330",pic:"static/img/45_thumb_g_1537437132463.jpg"},
                {pid:19,title:"水滴款富氢杯",price:"620",pic:"static/img/46_thumb_g_1537437395401.jpg"},
                {pid:20,title:"水滴款富氢杯",price:"480",pic:"static/img/52_thumb_g_1539764084497.jpg"}
            ]
        }
    },
    methods:{
        pro(){
            this.axios.get(
                "http://localhost:3000/product"
            ).then(res=>{
                console.log(res.data)
                this.pros=res.data
            })
        }
    },
    created(){
        this.pro();
    }
}
</script>
 <style>
 #product{
    margin-top:20px;
 }
 #product>.product-bread{
     margin:25px 0;
     display: flex;
     font-size:14px;
 }
 #product>.product-bread .el-breadcrumb{
      margin-top:3px;
  }
 #product>.product-content{
     display: flex;
 }
 #product .product-aside{
     width:20%;
     position: relative;
     display: flex;
     flex-direction: column;
 }
 #product .product-aside>p{
     background: skyblue;
     color:#fff;
     height: 40px;
     line-height: 40px;
     border-radius: 5px;
     font-size: 1rem;
     font-weight:bold;
     margin-bottom:5px;
     
 }
 #product .product-aside span:first-child{
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
 #product .product-aside ul>li{
     width:90%;
     margin:0 auto;
     margin-top:10px;
     border:2px solid #ddd;
 }
 #product .product-aside ul>li:hover{
     transition: 0.5s;
     border-color:skyblue;
     transform: translateY(-5px);
 }
 #product .product-aside ul>li>img{
     margin:0 auto;
     margin-top:5px;
     width:85%
 }
 #product .pro-title{
     font-size:0.8rem;
     font-weight:bold;
     color:#8d8c8c;
     float: left;
     margin-left:5%;
     margin-top:5px;
 }
 #product .pro-title:hover{
     color:red;
 }
 #product .pro-price{
     float: right;
     margin-right:5%;
     color:red;
     font-weight: bold;
     margin-top:5px;
     margin-bottom:5px;
 }
 #product .product-main{
     width:80%;
     text-align: left;
 }
 #product .pro-main-header{
     margin:0 auto;
     width: 98%;
 }
 #product .pro-main-header>div{
     border:1px solid #ddd;
     border-top:none;
     height:40px;
     line-height: 40px;
     padding-left:10px;
     font-size:12px;
 }
 #product .pro-main-header>div:not(:first-child){
     display: flex;
 } 
 #product .pro-main-header>div ul{
     display: flex;
 }
 #product .pro-main-header>div ul>li{
     padding: 2px 5px;
     margin-right:15px;
 }
 #product .pro-main-header>div ul>li>a:hover{
     color:red;
     font-weight: bold;
 }
 #product .pro-main-header>div span:last-child{
     float: right;
     margin-right:10px;
 }
 #product .pro-main-header>div:first-child{
     background: #ddd;
     margin:0 auto;
     text-align: left;
 }
 #product .pro-main-main ul{
     width:98%;
     margin:0 auto;
     height:100%;
     display: flex;
     flex-direction:row;
     flex-wrap: wrap;
     
 }
 #product .pro-main-main ul>li{
     border:2px solid #ddd;
     padding:5px 5px 10px;
     margin-top:20px;
     margin-right: 11px;
     text-align: right;
     height:100%;
 }
 #product .pro-main-main ul>li:hover{
     position: relative;
     border-color: skyblue;
 }
 #product .pro-main-main a{
     font-size:0.7rem;
     color:#fff;
     border-radius: 5px;
     width:30%;
     background: skyblue;
     padding:5px 10px;
     margin:10px 0;
 }
 </style>
 