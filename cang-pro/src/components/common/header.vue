<template>
    <div id="headerNav">
        <div class="logo">
            <img src="../../assets/img/logo.gif" alt="">    
        </div>
        <div class="nav">
            <ul class="hn-nav">
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/product">产品展示</router-link></li>
                <li><router-link to="/news">最新动态</router-link></li>
                <li><router-link to="/skill">技术支持</router-link></li>
                <li><router-link to="/join">商业合作</router-link></li>
            </ul>
        </div>
        <!-- <div class="search">
            <input type="text">
            <button><i class="iconfont  icon-sousuo search_img" ></i></button>
        </div>      -->
	</div>
</template>

<script>
export default {
    data (){
			return {
			}
		},
}
</script>
 <style>
 #headerNav{
     display: flex;
     justify-content: space-between;
     flex-direction: row;
     flex-wrap: nowrap;
     background: #e9e7e8;
 }
 .logo{
     width:20%;
     height:100px;
 }
 .logo>img{
     margin-top:15px;
 }
 .nav{
     width:80%;
     
 }
 .nav>.hn-nav{
     margin-top:20px;
     list-style:none;
     display: flex;
     justify-content:left;
     align-content: center;
     flex-direction: row;
 }
 .nav>.hn-nav>li{
     width:20%;
     float: left;
     margin-right:20px;
     padding:20px 20px;
 }
 .nav>.hn-nav>li>a{
     font-size:1em;
 }
 .nav>.hn-nav>li:hover{
     color:#FFF;
     font-weight: bold;
     transition: 1s;
     background: skyblue;
 }
 
 </style>
 