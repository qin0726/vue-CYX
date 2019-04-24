<template>
    <div id="aside">
       <div class="pro-main-header">
           <div>新闻公告</div>
            <div>
                <router-link to="news">最新动态</router-link>
            </div>
             <div>
                <router-link to="skill">技术支持</router-link>
            </div>
            <div>
                <router-link to="join">商业合作</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
#aside>.pro-main-header{
    width:100%;
    height:120px;
    margin-bottom:20px;
    border:1px solid #ddd;

}
#aside>.pro-main-header>div{
    border-top:none;
    height:27px;
    line-height: 27px;
    font-size: 0.8rem;
}
#aside>.pro-main-header>div:first-child{
    background: #eee;
    font-size: 0.9rem;
    font-weight: bold;
}
#aside>.pro-main-header>div:not(:first-child):hover{
    background: skyblue;
}
</style>


