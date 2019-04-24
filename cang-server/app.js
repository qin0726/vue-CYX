//引入功能模块
const express=require("express");
const cors=require("cors"); //解决跨域
const pool = require("./pool");//数据连接池
const bodyParser = require('body-parser'); //post数据处理

//创建服务器和监听端口
const app=express();
app.listen(3000,function(){
    console.log("服务器开始监听、、、")
});
//托管文件夹
app.use(express.static("public"));
//解决跨域 origin允许跨域访问域名列表 credentials跨域访问保存session id
app.use(cors({
    origin:'*',
    credentials:true
  }));
//接受处理post数据
app.use(bodyParser.urlencoded({extended:false}));


//创建路由
// 最新动态
app.get("/news",(req,res)=>{
    res.send([
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
    ])
})
// 产品列表
app.get("/product",(req,res)=>{
    res.send([
        {pid:1,title:"水滴款富氢杯",price:"1980",pic:"../../static/img/5_thumb_g_1478052188894.jpg"},
        {pid:2,title:"藏忆美颜棒",price:"198",pic:"../../static/img/10_thumb_g_1470715326777.jpg"},
        {pid:3,title:"水滴款富氢杯",price:"290",pic:"../../static/img/14_thumb_g_1470721394824.jpg"},
        {pid:4,title:"彩光嫩肤美塑仪",price:"3980",pic:"../../static/img/21_thumb_g_1537491152990.jpg"},
        {pid:5,title:"藏忆眼保仪",price:"580",pic:"../../static/img/28_thumb_g_1471916348976.jpg"},
        {pid:6,title:"绿色眼保仪",price:"980",pic:"../../static/img/29_thumb_g_1473215062453.jpg"},
        {pid:7,title:"水滴款富氢杯",price:"850",pic:"../../static/img/30_thumb_g_1479113327039.jpg"},
        {pid:8,title:"水滴款富氢杯",price:"980",pic:"../../static/img/33_thumb_g_1489369379710.jpg"},
        {pid:9,title:"水滴款富氢杯",price:"180",pic:"../../static/img/34_thumb_g_1479721265724.jpg"},
        {pid:10,title:"水滴款富氢杯",price:"280",pic:"../../static/img/35_thumb_g_1490248471008.jpg"},
        {pid:11,title:"纳米喷雾补水保湿仪",price:"190",pic:"../../static/img/37_thumb_g_1537435913349.jpg"},
        {pid:12,title:"水润保湿露",price:"170",pic:"../../static/img/39_thumb_g_1500005625430.jpg"},
        {pid:13,title:"氢敷面膜",price:"680",pic:"../../static/img/40_thumb_g_1537435315097.jpg"},
        {pid:14,title:"水滴款富氢杯",price:"780",pic:"../../static/img/41_thumb_g_1501552104961.jpg"},
        {pid:15,title:"眼部保健按摩仪",price:"380",pic:"../../static/img/42_thumb_g_1510105155952.jpg"},
        {pid:16,title:"眼部保健按摩仪",price:"580",pic:"../../static/img/43_thumb_g_1537435627947.jpg"},
        {pid:17,title:"眼部保健按摩仪",price:"480",pic:"../../static/img/44_thumb_g_1537436803736.jpg"},
        {pid:18,title:"眼部保健按摩仪",price:"330",pic:"../../static/img/45_thumb_g_1537437132463.jpg"},
        {pid:19,title:"水滴款富氢杯",price:"620",pic:"../../static/img/46_thumb_g_1537437395401.jpg"},
        {pid:20,title:"水滴款富氢杯",price:"480",pic:"../../static/img/52_thumb_g_1539764084497.jpg"}
       
    ])
})
// 详情页
app.get("/details",(req,res)=>{
    res.send([
        {did:1,dprice:"123",brand:"藏忆",gocate:"富氢系列",goid:"ESC00045",word:"富氢 保健 抗氧化",intr:"本产品具有抗老化皮肤，对皮肤起到保养作用"},
    ])
})


//登录
app.post("/login",(req,res)=>{
   var name=req.body.uname;
   var pwd=req.body.upwd;
    if(name==""||pwd==""){
        res.send({code:-1,msg:"不能为空"});
        return;
    }
    var sql="SELECT uid,uname,upwd from mx_user WHERE uname=? AND upwd=?";
    pool.query(sql,[name,pwd],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:"用户信息有误"})
        }else{
            res.send({code:1,msg:result})
        }
    })
})
//注册
app.post("/addUser",(req,res)=>{
    var name=req.body.uname;
   var pwd=req.body.upwd;
   console.log(name,pwd)
    if(name==""||pwd==""){
        res.send({code:-1,msg:"不能为空"});
        return;
    }
    var sql="INSERT INTO mx_user VALUES(null,?,?)";
    pool.query(sql,[name,pwd],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"注册成功"})
        }else{
            res.send({code:-1,msg:"注册失败"})
        }
    })
})
//注册查重用户
app.get("/finUser",(req,res)=>{
    var name=req.query.uname;
    var sql="SELECT uname FROM mx_user WHERE uname=?";
    pool.query(sql,[name],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"用户已存在"})
        }else{
            res.send({code:-1,msg:"可以使用"})
        }
    })
})
//轮播图
app.get("/banner",(req,res)=>{
    res.send([
        "http:127.0.0.1:3000/img/index/banner-1.jpg",
        "http:127.0.0.1:3000/img/index/banner-2.jpg",
        "http:127.0.0.1:3000/img/index/banner-3.jpg",
        "http:127.0.0.1:3000/img/index/banner-4.jpg",
        "http:127.0.0.1:3000/img/index/banner-5.jpg",
    ])
})
//获取index图片
app.get("/indexImg",(req,res)=>{
    res.send([
        "http:127.0.0.1:3000/img/index/icon-1.jpg",
        "http:127.0.0.1:3000/img/index/icon-2.jpg",
        "http:127.0.0.1:3000/img/index/icon-3.jpg",
        "http:127.0.0.1:3000/img/index/icon-4.jpg",
        "http:127.0.0.1:3000/img/index/news-1.jpg",
        "http:127.0.0.1:3000/img/index/news-2.jpg",
        "http:127.0.0.1:3000/img/index/news-3.jpg",
        "http:127.0.0.1:3000/img/index/news-4.jpg",
    ])
})
//获取food图片

//获取销售情况
app.get("/sales",(req,res)=>{
    res.send([
        [
        {ye:2010,sa:95},
        {ye:2011,sa:560},
        {ye:2012,sa:1280},
        {ye:2013,sa:2000},
        {ye:2014,sa:2300},
        {ye:2015,sa:2600},
        {ye:2016,sa:2800},
        {ye:2017,sa:3000},
        {ye:2018,sa:3560},],
        [
        {na:"草莓慕斯",hc:6},
        {na:"芝士蛋糕",hc:5.7},
        {na:"蜂巢蛋糕",hc:5.3},
        {na:"椰青菜糕",hc:5},
        {na:"白森林",hc:4.9},
        ],
    ])
})