<template>
<div id="myAll">
   <!-- 头部 -->
   <div id="myHeader">
       <p>
           <span>&#xe7b5;</span>
           <span>&#xe6ce;</span>
       </p>
       <div>
           <span><img src="/static/img1/bgH.png"></span>
           <router-link to="/login"><p>登录/注册</p></router-link>
       </div>
   </div>

   <!-- 钱包部分 -->
   <div id="myMoney">
       <ul>
           <li>
               <a href="javascript:;">
                   <i></i>
                   <span>我的钱包</span>
               </a>
           </li>
           <li>
               <a href="javascript:;">
                   <i class="vk">--</i>
                   <span>优惠券</span>
               </a>
           </li>
           <li>
               <a href="javascript:;">
                   <i class="vk">--</i>
                   <span>白条</span>
               </a>
           </li>
           <li>
               <a href="javascript:;">
                   <i class="vk">--</i>
                   <span>鲜豆</span>
               </a>
           </li>
       </ul>
   </div>
    <div class="myhide"></div>

    <!-- 领取红包部分 -->
    <div id="getMoney">
        <img src="static/img1/1.jpg">
    </div>

    <!-- 小图标部分 -->
    <div id="smallImg">
        <a href="javascript:;">
            <img src="/static/img1/1 (1).jpg">
            我的关注
        </a>
        <a href="javascript:;">
            <img src="/static/img1/1 (2).jpg">
            我的评价
        </a>
        <a href="javascript:;">
            <img src="/static/img1/1 (3).jpg">
            我的地址
        </a>
        <a href="javascript:;">
            <img src="/static/img1/1 (4).jpg">
            会员减运费
        </a>
        <div class="hideline"></div>
        <a href="javascript:;">
            <img src="/static/img1/1 (5).jpg">
            签到有惊喜
        </a>
        <a href="javascript:;">
            <img src="/static/img1/1 (6).jpg">
            退款/售后
        </a>
        <a href="javascript:;">
            <img src="/static/img1/1 (7).jpg">
            客服反馈
        </a>
        <a href="javascript:;">
            <img src="/static/img1/1 (8).jpg">
            帮助中心
        </a>
        <div class="hideline"></div>
        <a href="javascript:;">
            <img src="/static/img1/1 (14).jpg">
            办公室超市
        </a>
        <a href="javascript:;">
            <img src="/static/img1/1 (11).jpg">
            配送员招募
        </a>
        <a href="javascript:;">
            <img src="/static/img1/1 (12).jpg">
            关于我们
        </a>
    </div>
    <div class="myfooter"></div>
</div>
 
</template>

<script>
export default {
  
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
/* 头部 */
#myHeader{
    width: 100%;
    background: url(/static/img1/myBg.png) no-repeat top center;
    overflow: hidden;
    background-size: 100% 100%;
}
#myHeader > p{
    width: 15%;
    padding: 10px;
    text-align: center;
    float: right;
}
#myHeader > p span{
    font-family: iconfont;
    color: #ffffff;
    font-size: 20px;
}
#myHeader > div{
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 0 20px 0
}
#myHeader > div span{
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
}
#myHeader > div span img{
    width: 60px;
    height: 60px;
    display: block;
}
#myHeader > div p{
    color: #ffffff;
    font-size: 14px;
    background: #69C575;
    width: 25%;
    float: left;
    padding: 5px;
    text-align: center;
    margin-left: 10px;
    margin-top: 15px;
}

/* 钱包部分 */
#myMoney{
    width: 90%;
    margin:0 auto;
}
#myMoney li{
    list-style: none;
    float: left;
    width: 25%;
    text-align: center;
    padding: 10px 0
}
#myMoney li a{
    text-decoration: none;
    font-size: 12px;
}
#myMoney li:nth-child(1) i{
    position: relative;
    left: 50%;
    background-size: 25px 25px;
    display: block;
    width: 25px;
    height: 25px;
    margin-left: -12px;
    background: url(/static/img1/money.png) no-repeat -20px -10px;
}
.vk{
    display: block;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    color: #323232;
}
.myhide{
    clear: both;
    width: 100%;
    height: 10px;
    background: #F4F4F4;
}

/* 领取红包部分 */
#getMoney{
    width: 100%;
}
#getMoney img{
    width: 100%;
}

/* 小图标部分 */
#smallImg{
    width: 100%;
    margin: 0 auto;
}
#smallImg a{
    width: 23%;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    font-size: 12px;
    padding: 0 0 20px 0;
    margin-top: -15px
}
#smallImg a img{
    width: 100%
}
.hideline{
    width: 100%;
    height: 1px;
    background: #F4F4F4;
}
.myfooter{
    width: 100%;
    height: 70px;
}
</style>
