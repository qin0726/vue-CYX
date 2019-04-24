<template>
 <div id="join">
        <div class="join-bread">
            <i class="icon iconfont  icon-zhuye" ></i>
            <span>当前位置：</span>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>商业合作</el-breadcrumb-item>
            </el-breadcrumb>
      </div>
      <div class="join-section">
          <div class="join-aside">
            <Aside></Aside>
          </div>
            <div class="join-list">
                <div class="join-list-title">商业合作</div>
                <div class="join-list-time">发布时间：2019-08-22</div>
                <div class="join-list-item">
                    <h2>一、企业服务</h2>
                    <p>广州藏忆科技有限公司自杰诚集团旗下的一家技术型生产企业，集健康电子产品的研发、生产与销售于一体；公司拥有一流的产品开发人员、品牌营销策划人员以及行业内先进的生产制造设备，以打造家健康文化为主题的健康电子生活空间为己任，为中国家庭成员的健康事业发展助力，并已成为健康电子领域的先行者与领跑者；在此，我们期待更多的健康合作伙伴们的加入与参与，共同打造健康事业的明天！</p>
                    <p> 藏忆科技是一家经营高科技健康类电子产品为主的企业。公司于2007年10月成立，2008年成立与英国Dyal公司取得战略合作，进行富氢、按摩、净化以及美妆领域产品的研发，也为各品牌企业提供产品解决方案与企业代加工服务。我们提供一流的电子产品及电子礼品设计、开发、生产及销售服务，极力打造藏忆独特的品牌价值，同时承接日本帝妃DEARFERE的全线加工生产服务，在高端健康电子产品领域，成为中国的先行者与领跑者</p>
                    <p>公司有专业的研发与设计团队,线下生产中心分布于广州、深圳、苏州、北京，您不需庞大投资，也不需要耽误时间在各个环节的咨询跟进上，公司会为您定制生产出符合国际标准的优质产品。欢迎社会各界朋友共谋平台资源或跨界合作。</p>
                    <p>如有需求请联系市场部：020-31609***</p>
                    <h2>二、招商代理</h2>
                    <div class="item-2">
                         <div >
                            <p>联系方式：</p>
                            <p>广州市藏忆科技有限公司 </p>
                            <p>地址：广州市天河区金鱼街*号*栋*楼  </p>
                        </div>
                        <div>
                            <p>品牌招商：</p>
                            <p>联系人：高**   手机：19927614***</p>
                            <p>其他合作咨询热线：020-31609862 </p>
                        </div>
                    </div>
                   
                    
                    <img src="../../static/img/20161103173551_30777.jpg" alt="">
                </div>
            </div>
      </div>
        
    </div>
</template>

<script>
import Aside from './common/aside';
export default {
    name:"join",
    components:{
        Aside,
    }
}
</script>
 <style>
 #join>.join-bread{
     margin:15px auto;
     display: flex;
     font-size: 14px;   
 }
 #join>.join-bread .el-breadcrumb{
      margin-top:3px;
 }
 #join>.join-section{
     display: flex;
 }
 #join .join-aside{
     width:20%;
 }
 #join .join-list{
     margin-left:1%;
     width:77%;
     font-size:0.9rem;
     border:1px solid #ddd;
 }
 #join .join-list .join-list-title{
     background: #eee;
     font-weight:bold;
     padding: 4px 0;
 }
 #join .join-list .join-list-time{
     text-align: right;
     padding: 0 10px;
 }
 #join .join-list .join-list-item{
     text-align:left;
     padding: 0 10px;
 }
 #join .join-list .join-list-item p{
      text-indent:32px;
      line-height: 25px;
  }
 #join .join-list-item .item-2{
     display: flex;
 }
  #join .join-list-item .item-2>div:last-child{
      margin-left:10%;
  }
  #join .join-list-item img{
      margin: 20px 0 50px;
      width:70%;
  }
 </style>
 