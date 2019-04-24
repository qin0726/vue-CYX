<template>
    <div id="news">
        <div class="news-bread">
            <i class="icon iconfont  icon-zhuye" ></i>
            <span>当前位置：</span>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>最新动态</el-breadcrumb-item>
            </el-breadcrumb>
      </div>
      <div class="news-section">
          <div class="news-aside">
            <Aside></Aside>
          </div>
            <div class="news-list">
                <ul>
                    <li v-for="(news,i) in nes" :key=i>
                        <span><router-link to="/newslist">{{news.title}}</router-link></span>
                        <span>{{news.time}}</span>
                    </li>
                    
                </ul>
            </div>
      </div>
        
    </div>
</template>

<script>
import Aside from './common/aside';
export default {
    name:"news",
    components:{
        Aside,
    },
    data(){
        return {
            nes:[
                {nid:1,title:"藏忆众创平台",time:"2018-11-23"},
                {nid:2,title:"藏忆520氢我吧——线下活动",time:"2018-10-26"},
                {nid:3,title:"藏忆美博会再创佳绩",time:"2018-10-09"},
                {nid:4,title:"帝妃-品牌故事",time:"2018-09-25"},
                {nid:5,title:"藏忆-品牌故事",time:"2018-09-09"},
                {nid:6,title:"公司介绍",time:"2018-08-30"},
                {nid:7,title:"藏忆第七届康博会圆满收官",time:"2018-08-21"},
                {nid:8,title:"辞旧迎新。藏忆年会圆满落幕",time:"2018-07-23"},
                {nid:9,title:"藏忆健康养生交流会",time:"2018-07-10"},
                {nid:10,title:"中国健康保健博览会圆满落幕",time:"2018-06-11"},
                {nid:11,title:"藏忆爱心保健基金成立仪式",time:"2018-05-17"},
            ]
        }
    },
    methods:{
        news(){
            this.axios.get(
                "http://localhost:3000/news"
                ).then(res=>{
            console.log(res.data);
            this.nes=res.data;
        })
        }
    },
    created(){
        this.news()
    }
}
</script>
 <style>
 #news>.news-bread{
     margin:15px auto;
     display: flex;
     font-size: 14px;   
 }
 #news>.news-bread .el-breadcrumb{
      margin-top:3px;
 }
 #news>.news-section{
     display: flex;
 }
 #news .news-aside{
     width:20%;
 }
 #news .news-list{
     margin-left:1%;
     width:77%;
 }
 #news .news-list li{
     display: flex;
     justify-content: space-between;
     border:1px solid #ddd;
     padding:5px 10px;
     font-size:0.8rem;
 }
 #news .news-list li:not(:first-child){
     border-top:none;
 }
#news .news-list li a:hover{
    color:#10afee;
    text-decoration: underline;
}
 </style>
 