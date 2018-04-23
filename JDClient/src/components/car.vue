<template>
    <div id="car">
      <div class="carproDetail">
        <ul>
          <li class="a6p">
            <div class="a7v a7w aaa" @click="a7green()"></div>
            <div class="quanxuan">
              <span class="checked">全选</span>
              <button @click="emptyCar"><small>&#xe663;</small>清空购物车</button>
            </div>
            
          </li>
          <li v-for="car in bus.cars[shopid]" :key="car.guid">
            <div>
              <span class="a7v a7w a7y"></span>
              <p class="lPho"><img :src="car.src"></p>
              <label> 
                  <p>{{car.text}}</p>
                  <p>&yen;{{car.price}}</p>
                  <p>&yen;<del>1.9</del></p>
                  <p>
                    <button @click="subCar(car)">-</button>
                    {{car.num}}
                    <button @click="addCar(car)">+</button>
                  </p>
               </label>
            </div>
          </li>
        </ul>
      </div>
      

      <div class="carStart">
        <p @click="showCar()"><label>&#xe618;</label><span>&yen;{{total}}</span></p>
        <div class="sPrice">19元起送</div>
      </div>

    </div>
</template>

<script>
export default {
  props: ["shopid"],
  data() {
    return {
      checked: []
    };
  },
  computed: {
    total() {
      //总价
      var sum = 0;
      for (var i = 0; i < this.bus.cars[this.shopid].length; i++) {
        sum +=
          this.bus.cars[this.shopid][i].price *
          this.bus.cars[this.shopid][i].num;
      }
      return parseFloat(sum).toFixed(2);
    }
  },
  methods: {
    a7green(){
      var $ = this.jQuery
      $('.a7w').css({"background":"url(/static/img1/ck.png) no-repeat","background-size":"20px"})
      $('.carStart p').html('<label>&#xe618;</label><span>&yen;0</span>')
    },
    // 显示购物车商品
    showCar() {
      var $ = this.jQuery;
      if ($(".carproDetail").is(":hidden")) {
        $(".carproDetail").slideDown();
      } else {
        $(".carproDetail").slideUp();
      }
    },
    emptyCar() {
      //清空购物车
      var $ = this.jQuery;
      $(".carproDetail").hide();
      $(".carStart label").css("background","#BEBEBE")

      this.$set(this.bus.cars, this.shopid, []);
      this.$set(this.bus, "carnums", {});
    },

    addCar(gd) {
      //添加商品
      var car = this.bus.cars[this.shopid];
      for (var i = 0; i < car.length; i++) {
        if (car[i].guid == gd.guid) {
          if (this.bus.cars[this.shopid][i].num <= gd.store) {
            this.bus.cars[this.shopid][i].num++;
            //从新双向绑定响应数据
            this.bus.cars[this.shopid].splice(
              i,
              1,
              this.bus.cars[this.shopid][i]
            );

            this.$set(
              this.bus.carnums,
              gd.guid,
              this.bus.cars[this.shopid][i].num
            );
          }
          return;
        }
      }
      gd.num = 1; //商品的数量
      if (gd.num >= gd.store) {
        gd.num = gd.store;
      }
      this.bus.cars[this.shopid].push(gd);
      this.$set(this.bus.carnums, gd.guid, gd.num);
    },
    subCar(gd) {
      var car = this.bus.cars[this.shopid];
      for (var i = 0; i < car.length; i++) {
        if (car[i].guid == gd.guid) {
          var num = --this.bus.cars[this.shopid][i].num;
          this.bus.cars[this.shopid].splice(
            i,
            1,
            this.bus.cars[this.shopid][i]
          );

          if (num <= 0) {
            delete this.bus.carnums[gd.guid];
            this.bus.cars[this.shopid].splice(i, 1);
          }
          this.$set(this.bus.carnums, gd.guid, num);
          return;
        }
      }
    }
  }
};
</script>

<style>
#car {
  background: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid gray;
}
#car .carproDetail {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 50px;
  display: none;
}
#car .carproDetail ul {
  width: 100%;
  height: 40%;
  border-bottom: 1px solid gray;
  overflow-y: scroll;
  position: fixed;
  bottom: 50px;
  background: #ffffff;
}
#car .carproDetail li:nth-child(1) {
  margin: 15px;
  float: right;
}
#car .carproDetail li:nth-child(1) button small {
  font-family: iconfont;
}
#car .carproDetail li:nth-child(1) button {
  border: none;
  outline: none;
  background: none;
  color: gray;
}
#car .carproDetail li.a6p{
  width: 90%;
  /* background: red; */
  display: flex;
  justify-content: space-between;
}
#car .carproDetail li.a6p .quanxuan{
   display: flex;
   justify-content: space-between;
}
#car .carproDetail .a7v{
  margin: 0;
  padding-top: 10px;
  background: red;
}
#car .carproDetail .a7v .checked{
  width: 70%;
  background: red;
  position: absolute;
  left: -30px;
}
/* #car .carproDetail .aaa{
  width: 40%;
} */
/* #car .carproDetail .ap6 div{
  float: left;
  width: 50%;
  background: #000;
}
#car .carproDetail .ap6 div button{
  float: right;
   width: 50%;
   display: block;
} */
#car .carproDetail .a7w {
  width: 20px;
  height: 20px;
  padding: 10px 0 0 0;
  background: url(/static/img1/ck.png) no-repeat 0 -200px;
  background-size: 100%;
}
.a7y{
  width: 5%;
  display: inline-block;
  /* border:1px solid red; */
  margin-top: 15px;
}
#car .carproDetail li {
  list-style: none;
}
#car .carproDetail li > div {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content:space-around;
  flex-direction: row;
}
#car .carproDetail li > div > p {
  width: 15%;
  /* border: 1px solid red; */
  /* margin-left: -10%; */
}
#car .carproDetail li > div label {
  width: 60%;
  /* border: 1px solid #000; */
}
#car .carproDetail li > div label p:nth-child(1) {
  width: 90%;
  /* height: 100%; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
}
#car .carproDetail li > div label p:nth-child(2) {
  color: #ff3434;
}
#car .carproDetail li > div label p:nth-child(4) {
  float: right;
}
#car .carproDetail li > div label p:nth-child(4) button {
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
#car .carproDetail li .lPho {
  width: 20%;
}
#car .carproDetail li .lPho img {
  width: 100%;
}

#car .carStart {
  width: 100%;
}
#car .carStart p {
  width: 70%;
  background: #ffffff;
  color: gray;
  float: left;
  padding: 5px 0;
}
#car .carStart p span {
  margin-left: 10px;
}
#car .carStart p label {
  font-family: iconfont;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #bebebe;
  color: #ffffff;
  display: inline-block;
  font-size: 30px;
  text-align: center;
  line-height: 40px;
  margin-left: 10px;
}
#car .carStart div {
  width: 30%;
  height: 50px;
  background: #bebebe;
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  float: left;
  line-height: 50px;
}
#car .carStart p .carshul{
  background: red;
  position: absolute;
  left: 25px;
  display: block;
  top: -2px;
  width: 20px;
  height: 20px;
  font-size: 14px;
}
#car .carStart p .carshul small{
  position: relative;
  top: -9px;
  font-size: 14px;
}
</style>
