<template>
    <div id="footer">
       <div class="footer-title">
           <img src="../../assets/img/newtit.jpg" alt="">
           <br>
       </div>
       
       <div class="footer-new">
           <img src="../../assets/img/1506563728944676366.png" alt="">
           <img src="../../assets/img/1506563778566470338.png" alt="">
           <img src="../../assets/img/1506563852026498790.png" alt="">
       </div>
       <hr>
       <div class="service">
           <ul>
               <li>新手上路</li>
               <li>购物流程</li>
               <li>售后流程</li>
           </ul>
           <ul>
               <li>购物指南</li>
               <li>订单处理</li>
               <li>售后服务</li>
           </ul>
           <ul>
               <li>支付配送</li>
               <li>货到付款</li>
               <li>支付方式</li>
           </ul>
           <ul>
               <li>购物条款</li>
               <li>隐私保护</li>
               <li>售后流程</li>
           </ul>
           <ul>
               <li>关于藏忆</li>
               <li>招聘信息</li>
               <li>企业文化</li>
           </ul>
           <div class="service-img">
               <img src="../../assets/img/wx.jpg" alt="">
           </div>
       </div>
       <div class="message">
           <p>© 2010-2018 All rights reserved. </p>
           <p>本商店顾客个人信息将不会被泄漏给其他任何机构和个人</p>
           <p>有任何购物问题请联系我们在线客服 | 电话：020-31609862 | 工作时间：周一至周五 9:00－18:00</p>
           <p>粤ICP备17010425号-2</p>
       </div>
    </div>
</template>

<script>
export default {
    
}
</script>
 <style>
 #footer{
     margin:0 auto;
 }
 #footer>.footer-title{
    float: left;
 }
 #footer>.footer-title>img{
     height:35px;
 }
 #footer>br{
     clear: both;
 }
 #footer>.footer-new{
     display: flex;
     justify-content: space-around;
     width:100%;
     background:#e9e7e8;
     height:150px;
 }
 #footer>.footer-new>img{
    width:25%;
    height:60%;
    margin:auto;
 }
 #footer>.footer-new>img:hover{
     transition: 1s;
     transform: scale(1.1);
 }
 #footer>hr{
     margin-top:20px;
     height:5px;
     background: skyblue;
     border:1px 
 }
 #footer>.service{
     margin-top:20px;
     display: flex;
     justify-content: space-around;
 }
 #footer>.service>ul>li:not(:first-child){
     font-size:0.8rem;
     margin-top:10px;
 }
 #footer>.service>ul>li:hover{
     transform: translateY(-3px);
     font-weight: bold;
     color:skyblue;
 }
#footer>.message>p{
    margin-top:5px;
    font-size: 0.8rem;
}

 </style>
 