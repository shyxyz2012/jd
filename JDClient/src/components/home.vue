
<template>
 <div id="HOME">
    <!-- 首页头部部分 -->
    <div id="header">
        <div class="topnavaddress">
            <div>
                <span>&#xe734;<label>欣才IT学院 <small>&#xe665;</small></label></span>
                <span>&#xe79f;&nbsp;&nbsp;&nbsp;<span>&#xe62b;</span></span>
            </div>
        </div>
        <div class="searchshy">
            <div class="searchBoxshy">
                <span @click="skipSearch()">&#xe62b;<label>酸奶</label></span>
                <!-- <router-link to="/search"><span>&#xe62b;<label>酸奶</label></span></router-link> -->
            </div>
            <div class="hotkey">
                <a href="">牛奶</a>
                <a href="">饼干</a>
                <a href="">饮料</a>
                <a href="">薯片</a>
                <a href="">方便面</a>
                <a href="">可乐</a>
            </div>
        </div>
        <div class="pho">
            <img src="static/img/header.gif">
        </div>
     </div>

     <!-- 店铺类型部分 -->
     <div id="shopType">
         <div>
             <ul>
                <li v-for="type in types" :key="type.src"><a href="">
                   <img :src="type.src"> 
                   {{type.title}} 
                </a></li>
             </ul>
         </div>
     </div>

     <!-- 图片轮播部分 -->
    <div id="phoSlider">
        <div class="swiper-container swiper-container1">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="static/img/pho1.png"></div>
                <div class="swiper-slide"><img src="static/img/pho2.png"></div>
                <div class="swiper-slide"><img src="static/img/pho3.jpg"></div>
                <div class="swiper-slide"><img src="static/img/pho8.png"></div>
                <div class="swiper-slide"><img src="static/img/pho5.png"></div>
                <div class="swiper-slide"><img src="static/img/pho6.jpg"></div>
                <div class="swiper-slide"><img src="static/img/pho9.jpg"></div>
            </div>
            <div class="swiper-pagination xycsj"></div>
        </div>
    </div>
 
    <!-- 商品部分 -->
    <div id="products">
       <img src="static/img/pro1.jpg">
       <img src="static/img/pro2.jpg">
    </div>

    <!-- 超市部分 -->
    <div id="supermarket">
        <div>
            <h4>出游季</h4>
            <p>40减12</p>
            <img src="static/img/sup1.png">
        </div>
        <div>
            <h4>30-12</h4>
            <p>酸奶低至20</p>
            <img src="static/img/sup2.png">
        </div>
        <div>
            <h4>先声在康</h4>
            <p>满49减20</p>
            <img src="static/img/sup3.png">
        </div>
        <div>
            <h4>40减12</h4>
            <p>香梨6.9元</p>
            <img src="static/img/sup4.png">
        </div>
    </div>

    <!-- 秒杀，限时抢购部分 -->
    <div id="skill">
        <div class="skillHeader">
            <img src="static/img/ms.png">
            <span>更多 ></span>
        </div>
        <div class="manyPro">
            <div class="swiper-container swiper-container2">
                <div class="swiper-wrapper">
                    <div class="swiper-slide swiper1">
                        <p class="dj">
                        <img src="/static/img/cai1.jpg">
                        <span>淘菜园-南京玄武湖旗舰店</span>
                        </p>
                        <p class="dm">
                            <small>￥</small><b>1.99</b>
                        </p>
                        <p class="dn">
                            <small>￥</small><del>4</del>
                        </p>
                    </div>
                    <div class="swiper-slide swiper1">
                        <p class="dj">
                        <img src="/static/img/cai2.jpg">
                        <span>淘菜园-南京玄武湖旗舰店</span>
                        </p>
                        <p class="dm">
                            <small>￥</small><b>1.99</b>
                        </p>
                        <p class="dn">
                            <small>￥</small><del>4</del>
                        </p>
                    </div>
                    <div class="swiper-slide swiper1">
                        <p class="dj">
                        <img src="/static/img/cai3.jpg">
                        <span>淘菜园-南京玄武湖旗舰店</span>
                        </p>
                        <p class="dm">
                            <small>￥</small><b>1.99</b>
                        </p>
                        <p class="dn">
                            <small>￥</small><del>4</del>
                        </p>
                    </div>
                    <div class="swiper-slide swiper1">
                        <p class="dj">
                        <img src="/static/img/cai15.jpg">
                        <span>淘菜园-南京玄武湖旗舰店</span>
                        </p>
                        <p class="dm">
                            <small>￥</small><b>1.99</b>
                        </p>
                        <p class="dn">
                            <small>￥</small><del>4</del>
                        </p>
                    </div>
                    <div class="swiper-slide swiper1">
                        <p class="dj">
                        <img src="/static/img/cai5.png">
                        <span>淘菜园-南京玄武湖旗舰店</span>
                        </p>
                        <p class="dm">
                            <small>￥</small><b>1.99</b>
                        </p>
                        <p class="dn">
                            <small>￥</small><del>4</del>
                        </p>
                    </div>
                    <div class="swiper-slide swiper1">
                        <p class="dj">
                        <img src="/static/img/cai6.jpg">
                        <span>淘菜园-南京玄武湖旗舰店</span>
                        </p>
                        <p class="dm">
                            <small>￥</small><b>1.99</b>
                        </p>
                        <p class="dn">
                            <small>￥</small><del>4</del>
                        </p>
                    </div>
                    <div class="swiper-slide swiper1">
                        <p class="dj">
                        <img src="/static/img/cai7.png">
                        <span>淘菜园-南京玄武湖旗舰店</span>
                        </p>
                        <p class="dm">
                            <small>￥</small><b>1.99</b>
                        </p>
                        <p class="dn">
                            <small>￥</small><del>4</del>
                        </p>
                    </div>
                    <div class="swiper-slide swiper1">
                        <p class="dj">
                        <img src="/static/img/cai8.jpg">
                        <span>淘菜园-南京玄武湖旗舰店</span>
                        </p>
                        <p class="dm">
                            <small>￥</small><b>1.99</b>
                        </p>
                        <p class="dn">
                            <small>￥</small><del>4</del>
                        </p>
                    </div>
                    <div class="swiper-slide swiper1">
                        <p class="dj">
                        <img src="/static/img/cai9.jpg">
                        <span>淘菜园-南京玄武湖旗舰店</span>
                        </p>
                        <p class="dm">
                            <small>￥</small><b>1.99</b>
                        </p>
                        <p class="dn">
                            <small>￥</small><del>4</del>
                        </p>
                    </div>
                    <div class="swiper-slide swiper1">
                        <p class="dj">
                        <img src="/static/img/cai10.jpg">
                        <span>淘菜园-南京玄武湖旗舰店</span>
                        </p>
                        <p class="dm">
                            <small>￥</small><b>1.99</b>
                        </p>
                        <p class="dn">
                            <small>￥</small><del>4</del>
                        </p>
                    </div>
                    <div class="swiper-slide swiper1">
                        <p class="dj">
                        <img src="/static/img/cai11.jpg">
                        <span>淘菜园-南京玄武湖旗舰店</span>
                        </p>
                        <p class="dm">
                            <small>￥</small><b>1.99</b>
                        </p>
                        <p class="dn">
                            <small>￥</small><del>4</del>
                        </p>
                    </div>
                    <div class="swiper-slide swiper1">
                        <p class="dj">
                        <img src="/static/img/cai12.jpg">
                        <span>淘菜园-南京玄武湖旗舰店</span>
                        </p>
                        <p class="dm">
                            <small>￥</small><b>1.99</b>
                        </p>
                        <p class="dn">
                            <small>￥</small><del>4</del>
                        </p>
                    </div>
                    <div class="swiper-slide swiper1">
                        <p class="dj">
                        <img src="/static/img/cai13.jpg">
                        <span>淘菜园-南京玄武湖旗舰店</span>
                        </p>
                        <p class="dm">
                            <small>￥</small><b>1.99</b>
                        </p>
                        <p class="dn">
                            <small>￥</small><del>4</del>
                        </p>
                    </div>
                    <div class="swiper-slide swiper1">
                        <p class="dj">
                        <img src="/static/img/cai14.jpg">
                        <span>淘菜园-南京玄武湖旗舰店</span>
                        </p>
                        <p class="dm">
                            <small>￥</small><b>1.99</b>
                        </p>
                        <p class="dn">
                            <small>￥</small><del>4</del>
                        </p>
                    </div>
                    <div class="swiper-slide swiper1">
                        <p class="last">
                            <img src="/static/img/many.PNG">
                            <label>查看更多</label>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 第二个轮播 -->
    <div id="phoSlider">
        <div class="swiper-container swiper-container3">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="static/img/pho4.png"></div>
                <div class="swiper-slide"><img src="static/img/pho7.png"></div>
                <div class="swiper-slide"><img src="static/img/pho10.png"></div>
            </div>
            <div class="swiper-pagination xycsj"></div>
        </div>
    </div>

    <!-- 附近的店铺 -->
    <div id="nearyShop">
        <div class="shopTitle"><span>附近的店铺</span></div>
    </div>

  </div>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll'//局部引入无限加载
import "swiper/dist/css/swiper.min.css";
import Swiper from "Swiper";

export default {
     directives: {infiniteScroll:infiniteScroll},
  data() {
    return {
        types:[
            {
                src:'static/img/shop1.png',
                title:'超市生鲜'
            },
             {
                src:'static/img/shop2.png',
                title:'新鲜水果'
            },
            {
                src:'static/img/shop3.png',
                title:'美食烘焙'
            },
            {
                src:'static/img/shop4.png',
                title:'鲜花蛋糕'
            },
            {
                src:'static/img/shop5.png',
                title:'医药健康'
            },
            {
                src:'static/img/shop6.png',
                title:'新人专享'
            },
            {
                src:'static/img/shop7.png',
                title:'VIP会员'
            },
            {
                src:'static/img/shop8.png',
                title:'帮助中心'
            },
            {
                src:'static/img/shop9.png',
                title:'分享有礼'
            },
            {
                src:'static/img/shop10.png',
                title:'签到'
            },
        ],
        busy:false,
    };
  },
  methods:{
      skipSearch(){
          window.location.hash='/search'
      }
  },
  created() {
    var $ = this.jQuery;
    $(window).scroll(function(event) {
      var top = $(this).scrollTop();
      var al = top / 106;
      if (al > 1) {
        return;
      }
      $(".searchshy").css("background", "rgba(78,205,88," + (1 - al) + ")");
      $(".topnavaddress").css("background", "rgba(75, 201, 85, " + al + ")");
      if (top >= 10) {
        $(".topnavaddress > div span:nth-child(2)").css({
          marginRight: "0",
          transition: "1s"
        });
      } else {
        $(".topnavaddress > div span:nth-child(2)").css({
          marginRight: "-40px",
          transition: "1s"
        });
      }
    });
  },
  mounted() {
    var mySwiper = new Swiper('.swiper-container1', {
        autoplay: true,//可选选项，自动滑动
        loop : true,
        pagination: {el: '.swiper-pagination',}
    })
    var mySwiper1 = new Swiper('.swiper-container2', {
        freeMode : true,
        freeModeMomentum : false,
        slidesPerView: 'auto',
        loopedSlides: 8,
    })
    var mySwiper2 = new Swiper('.swiper-container3', {
        loop : true,
         pagination: {el: '.swiper-pagination',}
    })
  },
};
</script>

<style>
/* 首页头部部分开始 */
#HOME {
  background: #ffffff;
  overflow: hidden;
}
* {
  padding: 0;
  margin: 0;
}
#HOME .topnavaddress {
  width: 100%;
  height: 50px;
  background: rgba(78, 205, 88, 0);
  position: fixed;
  top: 0;
  z-index: 1000;
}
#HOME .topnavaddress > div {
  width: 93%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 20px 0 20px 0;
}
#HOME .topnavaddress > div span:nth-child(2) {
  margin-right: -40px;
  position: relative;
  bottom: 3px;
}
#HOME .topnavaddress span {
  font-family: iconfont;
  color: #ffffff;
  font-size: 22px;
}
#HOME .topnavaddress label {
  font-size: 14px;
  color: #ffffff;
  position: relative;
  top: -3px;
}
#HOME .topnavaddress small {
  font-family: iconfont;
}
#HOME .searchshy {
  background: rgba(78, 205, 88, 1);
  overflow: hidden;
}
#HOME .searchBoxshy {
  width: 95%;
  height: 30px;
  background: #ffffff;
  margin: 0 auto;
  border-radius: 20px;
  color: #afafaf;
  text-align: center;
  line-height: 30px;
  margin-top: 60px;
}
#HOME .searchBoxshy span {
  font-family: iconfont;
  font-size: 18px;
  background: #ffffff;
}
#HOME .searchBoxshy label {
  font-size: 16px;
}
#HOME .hotkey {
  text-align: center;
  padding: 8px 0 10px 0;
}
#HOME .hotkey a {
  font-size: 12px;
  color: #ffffff;
  text-decoration: none;
  padding: 0 8px;
  display: inline-block;
}
#HOME #header .pho img {
  width: 100%;
}
/* 首页头部部分结束 */

/* 店铺类型部分开始 */
#HOME #shopType {
  width: 100%;
  margin: 0 auto;
}
#HOME #shopType li {
  width: 20%;
  height: 75px;
  text-align: center;
  float: left;
  list-style: none;
  position: relative;
}
#HOME #shopType li img {
  width: 50px;
  height: 50px;
  display: block;
  margin: 0 auto;
}
#HOME #shopType li a {
  text-decoration: none;
  font-size: 12px;
  color: #000;
}
#HOME #shopType li div {
  width: 45px;
  height: 15px;
  background: #ff5757;
  color: #ffffff;
  position: absolute;
  border-radius: 10px;
  font-size: 12px;
  right: 0px;
}
/* 店铺类型部分结束 */

/* 图片轮播部分开始 */
#HOME #phoSlider {
  clear: both;
  width: 95%;
  margin:0 auto;
  padding: 10px 0;
}
#HOME #phoSlider img{
    width: 100%;
    height: 100%;
}
#HOME .swiper-pagination-bullet{
    width: 5px;
    height: 5px;
    border-radius: 50%;
}
#HOME .swiper-pagination-bullet-active{
     width: 6px;
}
/* 图片轮播部分结束 */

/* 商品部分 */
#HOME #products{
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
#HOME #products img{
    width: 49%;
    height: 100%;
}

/* 超市部分 */
#HOME #supermarket{
    width: 95%;
    margin: 10px auto;
}
#HOME #supermarket > div{
    width: 24%;
    background: #FBFBFB;
    text-align: center;
    float: left;
    margin: 0 0.5%
}
#HOME #supermarket h4{
    font-weight: 100;
    font-size: 14px;
    padding: 5px 0
}
#HOME #supermarket p{
    font-size: 12px;
    color:red;
}
#HOME #supermarket img{
    width: 80%;
    padding: 5px 0
}

/* 秒杀，限时抢购部分 */
#HOME #skill{
    clear: both;
    width: 94%;
    margin: 0 auto;
    padding-top: 10px
}
#HOME #skill .skillHeader{
    display: flex;
    justify-content: space-between
}
#HOME #skill .skillHeader span{
    color: red;
    font-size: 14px;
}
#HOME #skill .skillHeader img{
    width: 40%;
    height: 20px
}
#HOME .manyPro{
    margin-top: 10px;
    text-align: center
}
#HOME .manyPro a{
    width: 23%;
    text-decoration: none;
}
#HOME .manyPro .swiper-wrapper .swiper1{
    width: 23%;
}
#HOME .manyPro p{
    width: 100%;
}
#HOME .manyPro .dj{
    text-align: center
}
#HOME .manyPro .dj span{
    width: 65px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 12px;
    display: block;
    background: rgba(255,154,154,0.7);
    border-radius: 15px;
    color: #ffffff;
    text-align: center;
}
#HOME .manyPro .dm{
    color: #ff5757;
    text-align: center
}
#HOME .manyPro .dm i{
    font-weight: bold;
    font-size: 16px;
}
#HOME .manyPro .dn{
    color: #afafaf;
    text-align: center
}
#HOME .manyPro .dj img{
    width: 100%
}
#HOME .manyPro .swiper-wrapper .swiper1 .last img{
    width: 35px;
    height: 35px;
    display: block;
    position: relative;
    top: 60px;
}
#HOME .manyPro .swiper-wrapper .swiper1 .last label{
    display: block;
    width: 20px;
    color: #afafaf;
    font-size: 14px;
    float: right;
}

/* 附近的店铺 */
#HOME #nearyShop .shopTitle{
    font-size: 14px;
    line-height: 50px;
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #70704e;
    text-align: center;
    position: relative;
    background-color: #FFF;
    border-bottom: 1px solid #E7E9E4;
}
#HOME #nearyShop .shopTitle::before{
    content: '';
    height: 1px;
    border-top: 1px solid #333;
    width: 228px;
    position: absolute;
    top: 50%;
    margin-top: -1px;
    left: 50%;
    transform: scaleY(0.5) translate(-50%,0);
}
#HOME #nearyShop .shopTitle span{
    position: relative;
    padding: 0 5px;
    background-color: #FFF;
    display: inline-block;
    height: 50px;
    line-height: 48px;
    font-size: 17px;
    font-weight: bold;
    color: #333;
}

.xycsj{
    left: 50%;
    margin-left: -45px;
    width: none;
    background: none;
}
</style>


