<template>
    <div id="SHOPCAR">
      <!-- 购物车头部 -->
      <div id="carHeader">
        <div class="carInx"><span>&#xe734;</span>欣才IT学院(当前位置)</div>
      </div>

      <!-- 购物车产品详情 -->
      <div id="shopDetail">
        <div class="manyProShop" v-for="shopDetail in shopDetails" :key="shopDetail.guid">
          <div class="carproTitle">
            <span>{{shopDetail.title}}</span>
            <span>></span>
          </div>
          <p v-for="srcimg in shopDetail.src" :key="srcimg.guid">
            <img :src="srcimg.srcimg" alt="">
            <span class="carproprice">&yen;{{shopDetail.price}}</span>
          </p>
          <!-- <div class="carproprice">&yen;{{shopDetail.price}}</div> -->
          
        </div>
      </div>
      
    </div>
 
</template>

<script>

export default {
  data(){
      return{
       shopDetails:[],
      }
  },
  created() {
    this.jQuery.get(this.apiURL + "/shopDetails",(result) => {
      this.shopDetails = result.data
    })
  }
}
</script>

<style>
/* 购物车头部 */
*{
  padding: 0;
  margin: 0
}
#SHOPCAR{
  width: 100%;
  background: #F4F4F4;
  overflow: hidden;
}

#SHOPCAR #carHeader{
  width: 65%;
  background: rgb(188, 248, 193);
  height: 35px;
  border-radius: 50px;
  margin: 10px auto;
  padding: 8px 0;
  box-sizing: border-box;
}
#SHOPCAR #carHeader .carInx{
  color: #ffffff;
  text-align: center;
  background: #47B34F;
  width: 90%;
  margin: 0px auto;
  border-radius: 15px;
  font-size: 14px;
}
#SHOPCAR #carHeader .carInx span{
  font-family: iconfont;
}

/* 购物车商品详情 */
#SHOPCAR #shopDetail{
  margin-bottom: 100px;
}
#SHOPCAR #shopDetail .manyProShop{
  width: 95%;
  margin: 10px auto;
  background: #ffffff;
  border-radius: 5px;
}
#SHOPCAR #shopDetail .manyProShop .carproTitle{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed #eeeeee;
  font-size: 14px;
  padding: 10px; 
}
#SHOPCAR #shopDetail .manyProShop{
  overflow: hidden;
}
#SHOPCAR #shopDetail .manyProShop p{
  width: 25%;
  /* padding: 0 20px; */
  float: left;
}
#SHOPCAR #shopDetail .manyProShop p img{
  width: 100%;
}
#SHOPCAR #shopDetail .manyProShop .carproprice{
  font-size: 12px;
  padding: 10px 20px;
  float: left;
}

</style>
