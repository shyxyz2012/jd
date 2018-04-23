<template>
  <div>
      <div id="shopPDH">
        <div class="swiper-container swiper-container1">
            <div class="swiper-wrapper">
                <div class="swiper-slide bigP">
                    <img src="/static/img1/bigD (1).jpg">
                </div>
                <div class="swiper-slide bigP">
                    <img src="/static/img1/bigD (2).jpg">
                </div>
                <div class="swiper-slide bigP">
                    <img src="/static/img1/bigD (3).jpg">
                </div>
                <div class="swiper-slide bigP">
                    <img src="/static/img1/bigD (4).jpg">
                </div>
                <div class="swiper-slide bigP">
                    <img src="/static/img1/bigD (5).jpg">
                </div>
                <div class="swiper-slide bigP">
                    <img src="/static/img1/bigD.jpg">
                </div>
            </div>
            <div class="swiper-pagination tabsshy"></div>
        </div>
      </div>

        <!-- 产品标题部分 -->
        <div class="shoptitle">
            <p>伊利 安慕希希腊风味酸奶 原味 205g*12</p>
        </div>

        <!-- 倒计时部分 -->
        <!-- <div class="shoptime">
            <p><ins>秒杀</ins><label><span>{{time}}</span>:<span>00</span>:<span>00</span></label>结束</p>
        </div> -->

        <!-- 购物车部分 -->
        <div class="shopDCar">
            <div>
                <p>
                    <span>&yen;</span>
                    <b>56</b>
                    <del>66</del>
                </p>
                <p class="xyztzb"><label>加入购物车</label></p>
            </div>
        </div>

        <!-- 促销部分 -->
        <div class="sale">
            <p>促销</p>
            <div>
                <p><label>秒杀</label> 限时抢购</p>
                <p><label>满减</label> 多买促销满1件减10元</p>
            </div>
        </div>

        <div class="grayDiv"></div>

        <!--联系商家-->
        <div class="shopphone">
            <p><span>&#xe650;</span>沃尔玛-秦淮店</p>
            <p><span>&#xe76e;</span>联系商家</p>
        </div>

        <!-- 商品评价 -->
        <div class="proSpeak">
            <p>商铺评价<label>(共59人评价)</label></p>
            <p>
               <img src="/static/img1/hp.png">
            </p>
        </div>

        <div class="likeUp"></div>
        <!-- 查看图文详情 -->
        <div class="lookDetail">
            <router-link to="/shop/:guid/:title/:time/shopProDetail/proImgDetail">
                <span>查看图文详情</span>
                <label>&#xe8f2;</label>
            </router-link>
        </div>

        <div class="likeUp"></div>

        <!-- 也许你还喜欢 -->
        <div id="maybelike">
            <p>也许你还喜欢</p>
            <div class="swiper-container swiper-container2">
                <div class="swiper-pagination tabsxyz"></div>
                <div class="swiper-wrapper swiper-wrapper1">
                    <div class="swiper-slide">
                        <ul>
                            <li v-for="like in prolikes" :key="like.guid">
                                <p><img :src="like.src" alt=""></p>
                                <p>{{like.title}}</p>
                                <p>&yen;{{like.price}}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="swiper-slide">
                        <ul>
                            <li v-for="like in prolikes" :key="like.guid">
                                <p><img :src="like.src2" alt=""></p>
                                <p>{{like.title}}</p>
                                <p>&yen;{{like.price2}}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="swiper-slide">
                        <ul>
                            <li v-for="like in prolikes" :key="like.guid">
                                <p><img :src="like.src3" alt=""></p>
                                <p>{{like.title}}</p>
                                <p>&yen;{{like.price3}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

         <!-- 导航 -->
    <div id="grayNav">
            <el-dropdown :hide-on-click="false">
                <span class="el-dropdown-link grayspan">
                    <i class="el-icon-more"></i>
                </span>
                <el-dropdown-menu slot="dropdown" class="bgRgb">
                    <router-link to="/"><el-dropdown-item class="bgRgbone">首页</el-dropdown-item></router-link>
                    <router-link to="/type"><el-dropdown-item class="bgRgbone">分类</el-dropdown-item></router-link>
                    <router-link to="/shopcar"><el-dropdown-item class="bgRgbone">购物车</el-dropdown-item></router-link>
                    <router-link to="/my"><el-dropdown-item class="bgRgboneo">我的</el-dropdown-item></router-link>
                </el-dropdown-menu>
            </el-dropdown>
        </div>


  </div>
</template>

<script>
import "swiper/dist/css/swiper.min.css"
import Swiper from "Swiper"

export default {   
  data(){
      return{
          prolikes:[]
      }
  },
  mounted(){
      var mySwiper = new Swiper('.swiper-container1', {
        loop : true,
        pagination: {el: '.swiper-pagination',type: 'fraction',}
    })

    var mySwiper = new Swiper('.swiper-container2', {
        loop : true,
        pagination: {el: '.swiper-pagination',}
    })
  },
  
  created(){
      this.jQuery.get(this.apiURL + "/prolikes",(result) => {
      this.prolikes = result.data
    })
  }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
#shopPDH{
    width: 100%;
    height: 300px;
}
#shopPDH .bigP{
    width: 250px;
    height: 300px;
}
#shopPDH .bigP img{
    width: 100%;
    height: 100%;
}
#shopPDH .tabsshy{
    background: gray;
    border-radius: 15px;
    color: #ffffff;
    width: 50px;
    position: absolute;
    left: 250px;
}
.shoptitle{
    width: 100%;
    border-top: 1px solid #F8F7F7;
    border-bottom: 1px solid #F8F7F7;
}
.shoptitle p{
    width: 70%;
    margin: 0 auto;
    font-size: 14px;
    text-align: center;
    padding: 5px 0
}
.shoptime{
    width: 100%;
    background: #FFEAEA;
}
.shoptime p{
    text-align: center;
    padding: 10px 0;
    color: #FF3434;
}
.shoptime p span{
    color: #ffffff;
    background: #FF3434;
    padding:0 2px;
    margin: 2px;
    border-radius: 5px;
}
/* 购物车部分 */
.shopDCar{
    width: 100%;
    border-bottom: 1px solid #F8F7F7;
    padding: 10px 0
}
.shopDCar > div{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.shopDCar div span{
    color: #FF3434;
    font-size: 18px;
}
.shopDCar div b{
    color: #FF3434;
    font-size: 28px;
}
.shopDCar div del{
    color: gray;
}
.shopDCar div p:nth-child(2){
    background: #47B34F;
    color: #ffffff;
    padding: 0 10px;
    border-radius: 5px;
    margin-top: 5px;
}
.shopDCar div p.xyztzb label{
    padding-top: 4px;
    display: block;
    background: none;
}

/* 促销部分 */
.sale{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.sale > p{
    font-size: 12px;
    color: gray;
    width: 15%;
}
.sale > div{
    width: 85%;
}
.sale > div label{
    font-size: 12px;
    color: #ffffff;
    border-radius: 2px;
    padding: 0 2px;
}
.sale > div p{
    font-size: 12px;
    padding: 8px 0
}
.sale > div label:nth-child(1){
    background: #FF3434;
}
.sale > div p:nth-child(2){
    border-top: 1px solid #F8F7F7;
}
.sale > div p:nth-child(2) label{
    background: #47B34F;
}
.grayDiv{
    width: 100%;
    height: 10px;
    background: #F4F4F4;
}

/* 联系商家 */
.shopphone{
    width: 100%;
    border-bottom: 1px solid #F4F4F4;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
}
.shopphone span{
    font-family: iconfont;
}
.shopphone p{
    margin: 0 10px;
}

/* 商品评价 */
.proSpeak{
    width: 90%;
    margin: 0 auto;
    padding: 15px 0;
}
.proSpeak p{
    font-size: 12px;
}
.proSpeak p label{
    color: gray;
}
.proSpeak p:nth-child(2){
    width: 100%;
    height: 30px;
}
.proSpeak p:nth-child(2) img{
    width: 100%;
    height: 20px;
}

/* 查看图文详情 */
.lookDetail{
    width: 100%;
    padding: 40px 0;
    background: #ffffff;
    text-align: center
}
.lookDetail a{
    text-decoration: none;
    color: #000;
}
.lookDetail span{
    font-size: 14px;
}
.lookDetail label{
    color: #47B34F;
    font-family: iconfont;
    font-size: 18px;
}

.likeUp{
    width: 100%;
    background: #F4F4F4;
    height: 10px;
}
/* 也许你还喜欢 */
#maybelike{
    width: 100%;
}
#maybelike p{
    padding: 10px;
}
#maybelike .swiper-container2 .tabsxyz{
    position: relative;
    left: 250px;
    width: 20%;
}
#maybelike .swiper-wrapper1{
    width: 95%;
    margin: 0 auto;
}
#maybelike .swiper-wrapper1 div{
    width: 100%;
    margin: 0 auto;
}
#maybelike li{
    width: 33%;
    margin-left: 2%;
    list-style: none;
    float: left;
    margin: 5px auto;
    text-align: center;
}
#maybelike li p img{
    width: 90%
}
#maybelike li p:nth-child(2){
    overflow: hidden; 
    white-space: nowrap;
    text-overflow:ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
#maybelike li p:nth-child(3){
    color: #FF3434
}
</style>


