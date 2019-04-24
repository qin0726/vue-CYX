<template>
 <div id="skill">
        <div class="skill-bread">
            <i class="icon iconfont  icon-zhuye" ></i>
            <span>当前位置：</span>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>技术支持</el-breadcrumb-item>
            </el-breadcrumb>
      </div>
      <div class="skill-section">
          <div class="skill-aside">
            <Aside></Aside>
          </div>
            <div class="skill-list">
                <div class="skill-list-title">技术支持</div>
                <div class="skill-list-time">发布时间：2019-08-22</div>
                <div class="skill-list-item">
                    <img src="../../static/img/20190326161933.jpg" alt="">
                </div>
            </div>
      </div>
        
    </div>
</template>

<script>
import Aside from './common/aside';
export default {
    name:"skill",
    components:{
        Aside,
    }
}
</script>
 <style>
 #skill>.skill-bread{
     margin:15px auto;
     display: flex;
     font-size: 14px;   
 }
 #skill>.skill-bread .el-breadcrumb{
      margin-top:3px;
 }
 #skill>.skill-section{
     display: flex;
 }
 #skill .skill-aside{
     width:20%;
 }
 #skill .skill-list{
     margin-left:1%;
     width:77%;
     font-size:0.9rem;
     border:1px solid #ddd;
 }
 #skill .skill-list .skill-list-title{
     background: #eee;
     font-weight:bold;
     padding: 4px 0;
 }
 #skill .skill-list .skill-list-time{
     text-align: right;
     padding: 0 10px;
 }
 #skill .skill-list .skill-list-item>img{
     width:98%;
 }
 </style>
 