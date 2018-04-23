<template>
<div id="shopsmh">
    <!-- 头部 -->
    <div id="shop-header">
        <div class="headerone">
            <span><img src="/static/img/sup1.png"></span>
            <label>
                <h4>{{title}}</h4>
                <p>达达专送 | {{time}} 分钟</p> 
                <p>基础运费 4 元</p>
            </label>
        </div>
        <p class="pF">
            <span><i>首单</i>立减2</span>
            <span @click="quanShow">30个活动∨</span>
        </p>
        <div class="hideQuan">
            <span>公告</span>
            <small>2公里内30分钟急速配送到家，支持到店自提再省运费，有任何问题联系门店<br>17715265129</small>
            <div class="a0m">
                <h2 class="a0l">店铺优惠券</h2>
            </div>
            <ul class="a25">
                <li>
                    <div class="a2a">40元</div>
                    <div class="a29">
                        <div class="a44">
                            <p>满129元可用</p>
                            <p>领取后当日有效</p>
                        </div>
                    </div>
                    <div class="a28">
                        <div class="a27"><p>领券</p></div>
                    </div>
                </li>
                <li>
                    <div class="a2a">40元</div>
                    <div class="a29">
                        <div class="a44">
                            <p>满129元可用</p>
                            <p>领取后当日有效</p>
                        </div>
                    </div>
                    <div class="a28">
                        <div class="a27"><p>领券</p></div>
                    </div>
                </li>
                <li>
                    <div class="a2a">40元</div>
                    <div class="a29">
                        <div class="a44">
                            <p>满129元可用</p>
                            <p>领取后当日有效</p>
                        </div>
                    </div>
                    <div class="a28">
                        <div class="a27"><p>领券</p></div>
                    </div>
                </li>
                <li>
                    <div class="a2a">40元</div>
                    <div class="a29">
                        <div class="a44">
                            <p>满129元可用</p>
                            <p>领取后当日有效</p>
                        </div>
                    </div>
                    <div class="a28">
                        <div class="a27"><p>领券</p></div>
                    </div>
                </li>
                <li>
                    <div class="a2a">40元</div>
                    <div class="a29">
                        <div class="a44">
                            <p>满129元可用</p>
                            <p>领取后当日有效</p>
                        </div>
                    </div>
                    <div class="a28">
                        <div class="a27"><p>领券</p></div>
                    </div>
                </li>
                <li>
                    <div class="a2a">40元</div>
                    <div class="a29">
                        <div class="a44">
                            <p>满129元可用</p>
                            <p>领取后当日有效</p>
                        </div>
                    </div>
                    <div class="a28">
                        <div class="a27"><p>领券</p></div>
                    </div>
                </li>
            </ul>
            <div class="shopSpeak">
                <div class="a0m">
                    <h2 class="a0l">店铺好评</h2>
                </div>
                <ul>
                    <li>
                        <div>
                            <dl>
                                <dt>4.9</dt>
                                <dd>综合评分</dd>
                            </dl>
                            <p></p>
                            <dl>
                                <dt>2250</dt>
                                <dd>评论数</dd>
                            </dl>
                        </div>
                    </li>
                    <li class="liTwo">
                        <small>j***t</small>
                        <small>2018-09-23 12:09:20</small>
                    </li>
                    <li class="liLast">查看用户的全部评价></li>
                </ul>
            </div>
            <div class="shopInfo">
                <div class="a0m">
                    <h2 class="a0l">店铺信息</h2>
                </div>
                <ul class="shopInfoUl">
                    <li>
                        <div>
                            <ins>商品数量：</ins>
                            <ins>1178件</ins>
                        </div>
                        <div>
                            <ins>月销单量</ins>
                            <ins>68383单</ins>
                        </div>
                        <div>
                            <ins>关注人数</ins>
                            <ins>1238人</ins>
                        </div>
                        <div>
                            <ins>营业时间：</ins>
                            <ins>08：30-21:00</ins>
                        </div>
                        <div>
                            <ins>门店地址：</ins>
                            <ins>南京市秦淮区弓箭坊40号</ins>
                        </div>
                        <div>
                            <ins>门店电话：</ins>
                            <ins>192039203</ins>
                        </div>
                    </li>
                    <li class="infoLast">
                        <ins>举报商家得红包</ins>
                        <ins>最高奖100元</ins>
                    </li>
                </ul>
            </div>
            <div @click="quanHide" class="header-footer">
                <p>︿</p>
                点击继续购物
            </div>
        </div>
    </div>

    <!-- 店铺内容 -->
    <!-- 搜索框 -->
    <div id="shop">
        <div id="search">
            <div>
            <span>&#xe62b;</span>
            <input type="text" placeholder="搜索附近的商家、商品"> 
            </div>
        </div>

        <div class="left">
            <ul class="firstUl">
                <li v-for="(ctg,index) in ctgs" :key="ctg.guid">
                    <a class="leftMenu" href="" @click.prevent="selects(index)">{{ctg.text[index]}}</a>
                    <ul class="secondUl">
                        <li v-for="children in ctg.childrens" :key="children.guid">
                            <a href="" @click.prevent="showGoods(children.text)"> {{children.text}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="right">
            <div class="rTitle">
                <p>{{goods.ctgText}}({{goods.count}})</p>
            </div>
            <ul>
                <li v-for="(gd) in goods.data" :key="gd.guid">
                <div>
                    <p class="lPho"><img :src="gd.src"></p>
                    <label> 
                        <router-link to="/shop/:guid/:title/:time/shopProDetail"><p>{{gd.text}}</p></router-link>
                        <p>月售{{gd.many}}件 | 好评100%</p>
                        <p>直降</p>
                        <p>&yen;{{gd.price}}</p>
                        <p>&yen;<del>1.9</del></p>
                        <p>
                            <span v-show="bus.carnums[gd.guid]">
                                <button @click="subCar(gd)">-</button>
                                {{bus.carnums[gd.guid]}}
                            </span>
                            <button @click="addCar(gd)">+</button>
                        </p>
                    </label>
                </div>
                </li>
            </ul>
            
        </div>
    </div>
    <!-- 底部内容 -->
    <div class="shopCarFooter">
        <car :shopid="guid"></car>
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
import car from "./car";

export default {
  props: ["guid", "title", "src", "time"],
  data() {
    return {
      ctgs: [],
      goods: [],
      count: "",
      ctgText: ""
    };
  },
  components: {
    car
  },
  created() {
    //   初始化购物车
    if (!this.bus.cars[this.guid]) {
      this.$set(this.bus.cars, this.guid, []);
    }

    this.jQuery.get(this.apiURL + "/ctgs", result => {
      this.ctgs = result.data;
    });
  },
  methods: {
    //   点击让隐藏的活动优惠券显示
    quanShow() {
      var $ = this.jQuery;
      $("#shop-header").css({ height: "100%" });
      $(".hideQuan").slideDown();
    },
    //   点击让活动优惠券隐藏
    quanHide() {
      var $ = this.jQuery;
      $("#shop-header").css({ height: "100px" });
      $(".hideQuan").slideUp();
    },

    //   店铺详情左边导航栏的显示和隐藏
    selects(index) {
      var $ = this.jQuery;
      $(".leftMenu").css({ color: "#000" });
      $(".leftMenu")
        .parent()
        .css({ background: "#F4F4F4" });
      $(".leftMenu")
        .parent()
        .eq(index)
        .css({ background: "#fff" });
      $(".leftMenu")
        .eq(index)
        .css({ color: "green" });

       $(".secondUl").slideUp();
       $(".secondUl")
        .eq(index)
        .slideDown();

      $(".leftMenu")
        .parent()
        .eq(index)
        .css({ background: "#fff", "border-left": "2px solid green" })
        .siblings()
        .css({ background: "#F4F4F4", "border-left": "none" });
    },

    showGoods(text) {
      this.jQuery.get(this.apiURL + "/goods", { ctgtext: text }, result => {
        if (result.errcode == 0) {
          this.goods = result;
        }
      });
    },

    addCar(gd) {
      //在购物车中添加商品
      var $ = this.jQuery;
      var car = this.bus.cars[this.guid];
      for (var i = 0; i < car.length; i++) {
        if (car[i].guid == gd.guid) {
          if (this.bus.cars[this.guid][i].num <= gd.store) {
            this.bus.cars[this.guid][i].num++;
            this.$set(
              this.bus.carnums,
              gd.guid,
              this.bus.cars[this.guid][i].num
            );
          }
          return;
        }
      }
      gd.num = 1; //购物车中初始数量
      if (gd.num >= gd.store) {
        gd.num = gd.store;
      }
      this.bus.cars[this.guid].push(gd);
      this.$set(this.bus.carnums, gd.guid, gd.num);

      $(".shopCarFooter .carStart label").css("background", "green");
    },
    subCar(gd) {
      var car = this.bus.cars[this.guid];
      for (var i = 0; i < car.length; i++) {
        if (car[i].guid == gd.guid) {
          var num = --this.bus.cars[this.guid][i].num;
          if (num <= 0) {
            delete this.bus.carnums[gd.guid];
            this.bus.cars[this.guid].splice(i, 1);
          }
          this.$set(this.bus.carnums, gd.guid, num);
          return;
        }
      }
    }
  },
  //   默认右边店铺内容开始数据就显示
  mounted(text) {
    this.jQuery.get(this.apiURL + "/goods", { ctgtext: text }, result => {
      if (result.errcode == 0) {
        this.goods = result;
      }
    });
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#shopsmh{
  background: #ffffff;
  overflow: hidden;
}
.header-footer {
  position: fixed;
  bottom: 0;
  background: #f2f8f3;
  width: 100%;
  border: 1px solid #dfdfe1;
  text-align: center;
  color: #666666;
  font-size: 14px;
  padding: 5px 0;
  margin-left: -10px;
}
#shop-header {
  width: 100%;
  background: url(/static/img/zzbj.jpg) no-repeat;
  position: fixed;
  top: 0;
  z-index: 100;
  overflow-y: scroll;
}
#shop-header .headerone {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  padding: 10px 0;
}
.hideQuan {
  width: 95%;
  margin: 0 auto;
  display: none;
}
.hideQuan span {
  color: #000;
  font-size: 10px;
  text-align: center;
  background: #ffffff;
  border-radius: 5px;
  display: inline-block;
  width: 10%;
  float: left;
}
.hideQuan small {
  color: #ffffff;
  display: inline-block;
  width: 87%;
  margin-left: 2%;
}
.hideQuan .a0m {
  position: relative;
  margin: 10px auto;
}
.hideQuan .a0m:before {
  content: "";
  position: absolute;
  top: 9px;
  left: 0;
  right: 64%;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
}
.hideQuan .a0m:after {
  content: "";
  position: absolute;
  left: 64%;
  top: 9px;
  right: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
}
.hideQuan .a0l {
  position: relative;
  width: 32%;
  margin: 0 auto;
  font-size: 15px;
  line-height: 18px;
  color: #fff;
  text-align: center;
}
.a25 {
  list-style: none;
  width: 90%;
  margin: 0 auto;
  padding: 0;
}
.a25 li {
  position: relative;
  height: 70px;
  border-radius: 5px;
  overflow: hidden;
  border-left: 3px solid #ff5757;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 0 10px 0;
}
.a25 li .a2a {
  height: 100%;
  width: 20%;
  background: #ffffff;
  color: #ff5757;
  text-align: center;
  line-height: 70px;
  float: left;
}
.a25 li .a29 {
  float: left;
  border: 1px solid #e4ddd8;
  background: #ffffff;
  width: 54%;
  height: 100%;
}
.a25 li .a44 {
  margin-top: 10px;
  margin-left: 5px;
}
.a25 li .a28 {
  background: url(/static/img/que.png) no-repeat;
  float: right;
  width: 30%;
  position: relative;
  width: 60px;
  height: 100%;
  margin-left: -71px;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 10px 100%;
  padding-left: 10px;
}
.a25 li .a28 .a27 {
  width: 100%;
  height: 100%;
  border-top: 1px solid #fff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 1px;
  border-bottom-left-radius: 1px;
  background-color: #fffbfb;
  border: 1px solid #ff9d9d;
  border-left: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.a25 li .a27 p {
  color: #ffffff;
  background: #ff5757;
  border-radius: 5px;
  width: 80%;
  margin: 25px auto;
  text-align: center;
  font-size: 14px;
}
.shopSpeak {
  margin-top: 20px;
}
.shopSpeak ul {
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  padding-top: 0;
  margin-bottom: 10px;
  margin-top: -1px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}
.shopSpeak li {
  border-bottom: 1px dashed #ffffff;
}
.shopSpeak li p {
  color: #ffffff;
  height: 50px;
  width: 1px;
  background: #ffffff;
  margin-bottom: 10px;
}
.shopSpeak li div {
  display: flex;
  justify-content: space-between;
}
.shopSpeak li div dl {
  text-align: center;
  width: 50%;
}
.shopSpeak li div dt {
  font-weight: bold;
  font-size: 24px;
  color: #ffffff;
}
.shopSpeak li.liLast {
  border-bottom: none;
  padding: 15px 0;
  text-align: center;
  color: #ffffff;
}
.shopSpeak li div dd {
  color: #ffffff;
  font-size: 12px;
}
#shop-header .headerone > span {
  width: 20%;
  height: 20%;
  border-radius: 5px;
  background: #ffffff;
  display: inline-block;
  overflow: hidden;
}
.shopSpeak li.liTwo {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}
.shopInfo {
  margin-bottom: 90px;
}
.shopInfo ul {
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  padding-top: 0;
  margin-bottom: 10px;
  margin-top: -1px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}
.shopInfo li {
  border-bottom: 1px dashed #ffffff;
}
.shopInfo li.infoLast {
  border-bottom: none;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
}
.shopInfo li div {
  padding: 3px 0;
}
.shopInfo li ins {
  text-decoration: none;
  color: #ffffff;
  font-size: 14px;
}
#shop-header .headerone > label {
  display: inline-block;
  width: 75%;
}
#shop-header label p {
  font-size: 12px;
}
#shop-header .headerone img {
  width: 100%;
}
#shop-header > p {
  width: 95%;
  padding: 0 2% 10px 3%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #ffffff;
}
#shop-header > p i {
  display: inline-block;
  background: #ff6c57;
  border-radius: 5px;
  padding: 0 4px;
}

/* 店铺内容 */
#shop {
  position: fixed;
  top: 110px;
  height: 100%;
}
#search {
  width: 100%;
  background: #eaeaea;
  padding: 5px 0;
}
#search div {
  width: 95%;
  border: 1px solid #e6e6e6;
  margin: 0 auto;
  background: #ffffff;
  padding: 3px;
}
#search span {
  font-family: iconfont;
  font-size: 18px;
}
#search input {
  border: none;
  outline: none;
  background: none;
}
#shop .left {
  float: left;
  width: 28%;
  margin-bottom: 30px;
  height: 65%;
  overflow-y: scroll;
  margin-bottom: 200px;
  background: #F4F4F4;
}
#shop .left .firstUl > li:nth-child(1) {
  background: #fff;
  border-left: 2px solid green;
}
#shop .left .firstUl {
  overflow-y: scroll;
  height: 100%;
}
#shop .leftMenu {
  color: #000;
  text-decoration: none;
}
#shop .left .firstUl > li > a {
  display: block;
  margin-left: -3px
}
#shop .left .firstUl li {
  background: #f4f4f4;
  color: #000;
  font-size: 14px;
  padding: 0 3px;
  border-bottom: 1px solid #e2e2e2;
  border-right: 1px solid #e2e2e2;
}
#shop .left .secondUl {
  list-style: none;
  display: none;
  background: #ffffff;
}
#shop .left .secondUl li {
  background: #ffffff;
  border-bottom: 1px dashed #e2e2e2;
  border-right: none;
}
#shop .left .secondUl a {
  text-decoration: none;
  color: #000;
  display: block;
  margin-left: -8px;
  border-left: 3px solid #ffffff;
  position: relative;
  z-index: 1000;
}
#shop .right {
  float: left;
  width: 72%;
  height: 63%;
}
#shop .right ul {
  height: 95%;
  overflow-y: scroll;
}
#shop .right li {
  list-style: none;
}
#shop .right ul a {
  text-decoration: none;
}
#shop .right li > div > p {
  width: 25%;
}
#shop .right li > div > label {
  width: 70%;
}
#shop .right li div {
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: 5px auto;
}
#shop .right label p:nth-child(1) {
  font-size: 12px;
  color: #000;
  padding: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#shop .right label p:nth-child(2) {
  font-size: 12px;
  color: #e6e6e6;
  padding: 3px 0;
}
#shop .right label p:nth-child(3) {
  font-size: 12px;
  color: #ffffff;
  background: #ffce0b;
  display: inline-block;
  width: 20%;
}
#shop .right label p:nth-child(4) {
  font-size: 12px;
  color: red;
  padding: 3px;
}
#shop .right label p:nth-child(5) {
  font-size: 12px;
  color: #e6e6e6;
}
#shop .right label p:nth-child(6) {
  float: right;
}
#shop .right label p:nth-child(6) button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ebebeb;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  color: #48b350;
  outline: none;
  background: none;
}
#shop .right .lPho {
  width: 25%;
}
#shop .right .lPho img {
  width: 100%;
}
#shop .right .rTitle {
  background: #f4f4f4;
  width: 100%;
  font-size: 14px;
  padding: 5px;
  height: 5%;
}

/* 导航 */
#grayNav{
    background: rgba(51,51,51,0.9);
    position: fixed;
    right: 0px;
    bottom: 100px;
    z-index: 20000;
}
#grayNav i{
    color: #ffffff;
    padding: 6px 7px;
}
.bgRgb{
    background: rgba(51,51,51,0.9);
}
.bgRgbone{
    border-bottom: 1px solid #ffffff;
    color: #ffffff
}
.bgRgboneo{
    border-bottom: none;
    color: #ffffff
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}
  .el-icon-arrow-down {
    font-size: 12px;
}
</style>

