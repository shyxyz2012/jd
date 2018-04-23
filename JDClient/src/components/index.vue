<template>
  <div>
    <div id="shopDetail" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <div class="oneShop" v-for="(shop,index) in shops" :key="shop.guid">
          <div class="shopLogo"><img :src="shop.src"></div>
          <div class="shopContain">
            <h4>
              <router-link :to="'/shop/'+shop.guid+'/'+shop.title+'/'+shop.time">{{shop.title}}</router-link>
            </h4>
            <p class="time">达达专送-{{shop.time}}分钟</p>
            <p class="xing">{{shop.star}} <label>| 月售{{shop.many}}单</label></p>
            <p class="money">0元起送，距离{{shop.juli}}m,基础运费{{shop.money}}元</p>
            <div class="hideUl">
              <a href="">
                <ul>
                  <li>
                    <i>领券</i>
                    <span>满120减60,满89减30,满60减30,满40减20,满40减20</span>
                  </li>
                  <li>
                    <i>首单</i>
                    <span>立减2</span>
                  </li>
                  <li>
                    <i>满减</i>
                    <span>购买指定商品，可得赠品（赠完为止）</span>
                  </li>
                </ul>
              </a>
              <div @click="selects(index)">﹀</div>
            </div>
          </div>
        </div>
    </div>



  </div>
</template>
<script>
 import infiniteScroll from 'vue-infinite-scroll'//局部引入
export default {
//   directives: { infiniteScroll: this.infiniteScroll }, //全局引入
    directives: {infiniteScroll:infiniteScroll},
  data() {
    return {
      busy:false,
      shops: []
    };
  },
  methods:{
      loadMore(){
          this.busy=true
          this.jQuery.get(this.apiURL + "/shops",(result) => {
            this.shops =this.shops.concat(result.data)
            this.busy=false
        })
      },
      selects(index){
        var $=this.jQuery
        if($('.hideUl li').is(':hidden')){
          $('.hideUl div').eq(index).css({"transform":"rotateZ(0deg)"})
          $('.hideUl ul').eq(index).show()
        }else{
           $('.hideUl div').eq(index).css({"transform":"rotateZ(180deg)"})
          $('.hideUl ul').eq(index).hide()
        }
      }
  },
  created() {
    this.jQuery.get(this.apiURL + "/shops",(result) => {
      this.shops = result.data
    })
    
  }
};
</script>

<style>
 #shopDetail{
   background: #ffffff;
   overflow: hidden;
 }
 #shopDetail .oneShop{
  width: 100%;
  border-bottom: 1px solid #E7E9E4;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
 #shopDetail .shopLogo{
  width: 20%;
  height: 20%;
  border-radius: 5px;
  border: 1px solid #E7E9E4;
  margin: 10px;
}
 #shopDetail .shopLogo img{
  width: 100%;
  height: 100%;
}
 #shopDetail .shopContain{
  width: 75%;
  margin: 0 auto
}
 #shopDetail .shopContain h4 a{
  text-decoration: none;
  color: #000;
}
 #shopDetail .shopContain .time{
  border: 1px solid #16A9FF;
  color: #16A9FF;
  font-size: 12px;
  width: 40%;
  margin: 5px 0 0 0;
}
 #shopDetail .shopContain .xing{
  color: #FFA14E;
  font-size: 12px;
  padding: 5px 0;
}
 #shopDetail .shopContain .xing label{
  color: gray;
}
 #shopDetail .shopContain .money{
  color: gray;
  font-size: 12px;
  padding: 0 0 10px 0;
  border-bottom: 1px dashed #E7E9E4;
}
 #shopDetail .hideUl{
  display: flex;
  justify-content: space-between;
}
 #shopDetail .hideUl a{
  text-decoration: none;
}
 #shopDetail .hideUl li{
  list-style: none;
  font-size: 10px;
}
 #shopDetail .hideUl li i{
  color: #ffffff;
  background: #FF6C57;
  border-radius: 5px;
  padding: 0 3px;
}
 #shopDetail .hideUl li:nth-child(2) i{
  background:green;
}
 #shopDetail .hideUl li span{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  width: 150px;
  color: gray;
  display: inline-block;
  text-align: left;
}
 #shopDetail .hideUl div{
  font-size: 10px;
  color: gray;
  margin-right: 10px;
}
</style>



