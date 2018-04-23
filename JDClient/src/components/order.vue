<template>
<div id="orderDETAIL">
   <div id="orderDetail">
       <div class="oneOrder" v-for="order in orders" :key="order.guid">
           <div>
                <div class="orderTitle">
                   <router-link to="/orderdetail"><b>{{order.title}} ></b></router-link> 
                    <span>已完成</span>
                </div>
                <p class="orderTime">{{order.time}}</p>
                <div class="orderPro">
                    <p v-for="srcimg in order.src" :key="srcimg.guid"><img :src="srcimg.srcimg"></p>
                    <div>
                        <p>&yen;{{order.price}}</p>
                        <p>共{{order.many}}件</p>
                        <p>达达专送</p>
                        <p>再次购买</p>
                    </div>
                </div>
           </div>
           <div class="orderbgo"></div>
       </div>
       
   </div>
   <div id="orderFooter">
       已显示全部
   </div>
</div>
 
</template>

<script>
export default {
  data(){
      return{
       orders:[],
      }
  },
  created() {
    this.jQuery.get(this.apiURL + "/orders",(result) => {
      this.orders = result.data
    })
  }
}
</script>

<style>
*{
    padding: 0;
    margin: 0
}
#orderDETAIL #orderDetail .orderbgo{
    width: 100%;
    height: 10px;
    background: #F4F4F4;
    margin-top: 10px;
}
#orderDETAIL #orderDetail{
    width: 100%;
}
#orderDETAIL .oneOrder{
    width: 100%;
    background: #ffffff;
    margin: 0 0 10px 0;
    padding: 5px 0;
    overflow: hidden;
}
#orderDETAIL .oneOrder > div{
    width: 90%;
    margin: 0 auto;
}
#orderDETAIL .oneOrder .orderTitle{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
}
#orderDETAIL .orderTime{
    font-size: 12px;
    color: gray;
    padding: 5px 0
}
#orderDETAIL .orderPro > div{
    font-size: 12px;
    display: flex;
    flex-direction: column;
}
#orderDETAIL .orderPro > div p{
    width: 100%;
    text-align: right;
    padding: 0;
    margin: 0;
}
#orderDETAIL .orderPro > div p:nth-child(1){
    color: #FF5757;
}
#orderDETAIL .orderPro > div p:nth-child(3){
    color: #16A9FF;
}
#orderDETAIL .orderPro p{
    width: 20%;
    float: left;
    padding: 5px 0;
}
#orderDETAIL .orderPro p img{
    width: 100%;
}




#orderDETAIL #orderFooter{
    width: 100%;
    padding: 10px 0;
    text-align: center;
    background: #ffffff;
    margin-bottom: 100px;
}

</style>
