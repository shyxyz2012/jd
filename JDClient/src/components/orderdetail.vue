<template>
  <div id="orderdtzbshy">
    <!-- 头部 -->
    <div id="orderDH"></div>

    <!-- 订单已完成 -->
    <div id="orderover">
        <h3>订单已完成</h3>
        <p>感谢您使用京东到家</p>
        <p>再次购买</p>
        <div><span>&#xe643;</span>&nbsp;客服&nbsp;&nbsp;|&nbsp;&nbsp;<span>&#xe663;</span>&nbsp;删除</div>
    </div>

    <!-- 达达专送 -->
    <div id="orderpeople">
        <div class="orderPN">
            <dl>
                <dt><img src="/static/img1/orderP.png"></dt>
            </dl>
        </div>
        <div class="orderphone">
            <span>&#xe635;&nbsp;联系</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>&#xe672;&nbsp;打赏</span>
        </div>
    </div>

   <div class="orderMoney"><img src="/static/img1/1.jpg" alt=""></div>

   <!-- 订单店铺详情 -->
     <div id="ordershopD">
         <div class="ordersdT">
             <span>优选极速达-夫子庙店</span>
             <span>&#xe635;&nbsp;&nbsp;联系</span>
         </div>
        <div class="oneorderPro">
            <p><img src="/static/img1/ord (6).jpg" alt=""></p>
            <div>
                <p>乡乡嘴辣味小汁鱼 山椒味 50g/袋</p>
                <p><span>&yen;5.8 x 1</span><span>&yen;5.8</span></p>
            </div>
        </div>
        <div class="oneorderPro">
            <p><img src="/static/img1/ord (7).jpg" alt=""></p>
            <div>
                <p>卫来 魔芋爽(香辣素毛肚) 22g/袋</p>
                <p><span>&yen;2.1 x 1</span><span>&yen;2.1</span></p>
            </div>
        </div>
        <div class="oneorderPro">
            <p><img src="/static/img1/ord (10).jpg" alt=""></p>
            <div>
                <p>乡乡嘴酱5之鱼（酱汁鱼）12g/袋</p>
                <p><span>&yen;1.3 x 1</span><span>&yen;1.3</span></p>
            </div>
        </div>
        <div class="oneorderPro">
            <p><img src="/static/img1/ord (13).jpg" alt=""></p>
            <div>
                <p>伍滋味脆脆骨（香辣味）15g/袋</p>
                <p><span>&yen;5.8 x 1</span><span>&yen;5.8</span></p>
            </div>
        </div>
     </div>

    <div class="orderNumber">订单金额</div>

    <!-- 订单金额及优惠 -->
    <div id="orderallmoney">
        <div class="orderallOne"><span>商品金额</span><span>&yen;23</span></div>
        <div class="orderallOne"><span>配送费</span><span>&yen;4.5</span></div>
    </div>

    <div class="orderjian">
        <div class="orderjianone"><span><ins>首单</ins><label>首单立减</label></span><span>-&yen;2</span></div>
        <div class="orderjiantwo"><span><ins>优惠</ins><label>优惠券</label></span><span>-&yen;15</span></div>
        <div class="orderjianthree">已优惠 &yen; 17 实付金额&yen; <b>10.5</b></div>
    </div>
    <div class="orderhidediv"></div>


    <!-- 配送信息 -->
    <div id="orderInfo">
        <p><span>配送信息</span></p>
        <div>
            <p><label>送达时间：</label><span>营业即送 3月31日 09:30-10:00</span></p>
            <p><label>收货地址：</label><span>XXX199*****9087<br>南京市秦淮区欣才IT学院4楼A区</span></p>
            <p><label>配送方式：</label><span>达达专送</span></p>
        </div>
    </div>
    <div class="orderhidediv"></div>

    <!-- 订单信息 -->
    <div id="orderInfo">
        <p><span>订单信息</span></p>
        <div>
            <p><label>订单号码：</label><span>8723827487438473</span></p>
            <p><label>下单时间：</label><span>2018-03-30 22:10:09</span></p>
            <p><label>支付方式：</label><span>在线支付</span></p>
            <p><label>订单备注：</label><span>其他商品继续配送(缺货商品退款)</span></p>
        </div>
    </div>



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
#orderdtzbshy{
    overflow: hidden;
}
/* 头部 */
#orderDH{
    width: 100%;
    padding: 60px 0;
    background: #47B34F;
}

/* 订单已完成 */
#orderover{
    background: #ffffff;
    width: 95%;
    margin: 0 auto;
    text-align: center;
    position: relative;
    top: -50px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
    z-index: 100;
}
#orderover h3{
    font-size: 16px;
    padding:15px 0;
}
#orderover p:nth-child(2){
    font-size: 14px;
    color: #999999;
}
#orderover p:nth-child(3){
    font-size: 14px;
    color: #ffffff;
    background: #47B34F;
    padding: 5px 10px;
    width: 30%;
    position: relative;
    left: 50%;
    margin-left: -18%;
    margin-top: 20px;
}
#orderover div{
    font-size: 12px;
    padding: 15px 0;
    color: gray;
}
#orderover span{
    font-family: iconfont;
}

/* 达达专送 */
#orderpeople{
    width: 95%;
    margin: -40px auto 0 auto;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1);
    background: #ffffff;
    display: flex;
    justify-content: space-between;
}
#orderpeople .orderPN dt{
    width: 20%;
    padding: 5px 10px
}
#orderpeople .orderPN dt img{
    width: 100%;
}
#orderpeople .orderphone{
    width: 50%;
    padding-top: 15px;
    color: gray;
    font-size: 12px;
}
#orderpeople .orderphone span{
    font-family: iconfont;
    font-size: 14px;
}
#orderpeople .orderphone span:nth-child(1){
    color: #47B34F
}
#orderpeople .orderphone span:nth-child(2){
    color: #FB861F
}

.orderMoney{
    width: 100%;
    margin: 10px auto;
}
.orderMoney img{
    width: 100%;
}

/* 订单店铺详情 */
.ordersdT{
    width: 95%;
    margin: 0 auto;
    border-bottom: 1px solid #E8E8E8;
    padding: 10px 0;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
}
.ordersdT span:nth-child(2){
    color: #47B34F;
    font-family: iconfont;
}
.oneorderPro{
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.oneorderPro > p{
    width: 20%
}
.oneorderPro > p img{
    width: 100%
}
.oneorderPro > div{
    width: 75%;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    padding: 10px 0
}
.oneorderPro > div p:nth-child(2){
    padding: 2px 0;
}
.oneorderPro > div p:nth-child(2) span:first-child{
    float: left;
}
.oneorderPro > div p:nth-child(2) span:last-child{
    float: right;
}

.orderNumber{
    width: 85%;
    padding: 5px 0;
    text-align: center;
    background: #F9F9F9;
    font-size: 14px;
    color: #999999;
    margin: 10px auto;
}

/* 订单金额及优惠 */
#orderallmoney{
    width: 95%;
    margin: 0 auto;
}
#orderallmoney .orderallOne{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin: 10px auto;
}
.orderjian{
    width: 95%;
    margin: 30px auto 0 auto;
}
.orderjian .orderjianone,.orderjian .orderjiantwo{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin: 10px auto;
}
.orderjian .orderjianone span:nth-child(1) ins{
    background: #FE7865;
    color: #ffffff;
    border-radius: 2px;
    text-decoration: none;
    padding: 0 2px;
}
.orderjian .orderjianone span:nth-child(2){
    color: #FF5757;
}
.orderjian .orderjiantwo{
    border-bottom: 1px dashed #999;
    padding: 0 0 20px 0;
}
.orderjian .orderjiantwo span:nth-child(2){
    color: #FF5757;
}
.orderjian label{
    padding: 0 5px;
}
.orderjian .orderjiantwo span:nth-child(1) ins{
    background: #FF9257;
    color: #ffffff;
    border-radius: 2px;
    text-decoration: none;
    padding: 0 2px;
}
.orderjianthree{
    width: 75%;
    float: right;
    padding: 0 0 20px 0;
}
.orderjianthree b{
    font-size: 24px;
}
.orderhidediv{
    width: 100%;
    height: 10px;
    background: #F4F4F4;
    clear: both;
}

/* 配送信息 */
#orderInfo{
    width: 100%;
    background: #ffffff;
}
#orderInfo p:nth-child(1){
    width: 100%;
    border-bottom: 1px solid #F5F5F5;
    padding: 10px 0;
}
#orderInfo p:nth-child(1) span{
   margin-left: 10px;
}
#orderInfo > div{
    width: 95%;
    margin: 0 0 0 5%;
}
#orderInfo > div label{
    text-align: left;
    min-width: 70px;
    display: inline-block;
    white-space: nowrap;
}
#orderInfo > div p:nth-child(1) span{
    color: #333;
    display: inline-block;
    max-width: 70%;
    vertical-align: top;
    white-space: pre-wrap;
    font-size: 13px;
    box-sizing: border-box;
}
#orderInfo > div p{
    padding: 10px 0;
    border-bottom: 1px solid #F5F5F5;
}
#orderInfo > div p:nth-child(3) span{
    color: #16A9FF;
    border: 1px solid #16A9FF;
}

</style>


