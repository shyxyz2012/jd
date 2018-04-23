<template>
    <div id="car">
      <div class="carproDetail">
          <ul>
            <li><button @click="emptyCar"><small>&#xe663;</small>清空购物车</button></li>
            <li v-for="car in bus.cars[shopid]" :key="car.guid">
              <div>
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
        <p @click="showCar"><label>&#xe618;</label><span>&yen;{{total}}</span></p>
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
    }
  },
  computed: {
    total() {
      //总价
      var sum = 0;
      for (var i = 0; i < this.bus.cars[this.shopid].length; i++) {
        var gid = this.bus.cars[this.shopid][i].guid;
        if (this.checked.indexOf(gid) == -1) {
          continue;
        }
        sum +=
          this.bus.cars[this.shopid][i].price *
          this.bus.cars[this.shopid][i].num;
      }
      return sum;
    }
  },
  methods:{
     // 显示购物车商品
    showCar(){
      var $=this.jQuery
     if($('.carproDetail').is(':hidden')){
        $('.carproDetail').slideDown()
      }else{
        $('.carproDetail').slideUp()
      }
    },
    emptyCar(){//清空购物车
      this.$set(this.bus.cars,this.shopid,[])
      this.$set(this.bus,'carnums',{})
    },

    addCar(gd){//添加商品
      var car =  this.bus.cars[this.shopid]
      for( var i=0; i<car.length;i++){
        if(car[i].guid==gd.guid){
            if(this.bus.cars[this.shopid][i].num<=gd.store){
              this.bus.cars[this.shopid][i].num++
              //从新双向绑定响应数据
              this.bus.cars[this.shopid].splice(i,1,this.bus.cars[this.shopid][i])

              this.$set(this.bus.carnums,gd.guid,this.bus.cars[this.shopid][i].num)
            }
            return
        }
      }
      gd.num=1//商品的数量
      if(gd.num>=gd.store){
        gd.num = gd.store
      }
      this.bus.cars[this.shopid].push(gd)
      this.$set(this.bus.carnums,gd.guid,gd.num)
    },
    subCar(gd){
      var car =  this.bus.cars[this.shopid]
      for( var i=0; i<car.length;i++){
        if(car[i].guid==gd.guid){
            var num = --this.bus.cars[this.shopid][i].num
            this.bus.cars[this.shopid].splice(i,1,this.bus.cars[this.shopid][i])

            if(num<=0){
              delete this.bus.carnums[gd.guid]
              this.bus.cars[this.shopid].splice(i,1)
            }
            this.$set(this.bus.carnums,gd.guid,num)
            return
        }
      }
    }
  }
}
</script>

<style>
#car {
  background: #ffffff;
  width: 100%;
}
table {
  width: 100%;
  border-bottom: 1px solid #000;
  border-collapse: collapse;
}
td {
  border: 1px solid #000;
}
</style>
