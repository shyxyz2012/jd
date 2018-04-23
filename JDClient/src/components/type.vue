<template>
<div>
   <!-- 搜索框部分 -->
   <div id="search">
       <span>&#xe62b;</span>
       <input type="text" placeholder="搜索附近的商家、商品">
   </div>

   <!-- 商品类别部分 -->
   <div id="proType">
       <div class="proTypeL">
            <ul>
                <li class="liStyle" v-for="(typel,index) in type" :key="typel.guid" @click="showPro(index)">
                    <router-link to="">{{typel.leftT[index]}}</router-link>
                </li>
            </ul>
       </div>

       <div class="proTypeR">
           <ul class="parUl">
                <li v-for="typer in types" :key="typer.guid">
                    <p><img :src="typer.src"></p>
                    <p>{{typer.text}}</p>
                    <ul class="chiUl">
                        <li v-for="children in typer.childrens" :key="children.guid">
                            <p><img :src="children.src"></p>
                            <p>{{children.text}}</p>
                        </li>
                    </ul>
                </li>
            </ul>
       </div>
   </div>


</div>
</template>


<script>
export default {
  data(){
      return{
          types:[],
          type:[]
      }
  },
  created() {//将后台数据引入
    this.jQuery.get(this.apiURL + "/type", result => {
      this.type = result.data;
    });
  },
  methods:{
      showPro(index){
          var $=this.jQuery
            $.get(this.apiURL + "/types",result => {
                this.types = result.data;
            })
        $('.liStyle').eq(index).css({"background":"#ffffff","border-left":"2px solid green"}).siblings().css({"background":"#F8F8F8","border-left":"none"})
      }
  },
  mounted(){
    this.jQuery.get(this.apiURL + "/types",result => {
            this.types = result.data;
        })
    }
}
</script>

<style>
/* 搜索框部分 */
#search{
    width: 95%;
    border: 1px solid #E6E6E6;
    margin: 10px auto;
    padding: 3px;
    background: #ffffff;
}
#search span{
    font-family: iconfont;
    font-size: 18px;
}
#search input{
    border: none;
    outline: none;
}

/* 商品类别部分 */
#proType{
    width: 95%;
    margin: 0 auto;
    height: 100%;
    overflow: hidden;
    position: fixed;
}
#proType .proTypeL{
    float: left;
    width: 30%;
    height: 100%;
    margin-bottom: 100px;
     background: #F8F8F8;
}
#proType .proTypeL ul{
    padding: 0;
    margin: 0;
}
#proType .proTypeL li{
    width: 100%;
    list-style: none;
}
#proType .proTypeL .liStyle:nth-child(1){
    background: #ffffff;
    border-left: 2px solid green;
}
#proType .proTypeL li a{
    display: block;
}
#proType .proTypeR{
    float: left;
    height: 100%;
    width: 70%;
    overflow-y: scroll;
}
#proType .proTypeR > ul{
    padding-left: 10px; 
    margin-top: -40px;
}
#proType .proTypeR > ul ul{
    padding: 0;
    margin-top: 10px;
}
#proType .proTypeR .parUl > li{
    list-style: none;
}
.chiUl > li{
    list-style: none;
    float: left;
    width: 30%;
    margin-left: 2%;
    text-align: center;
}
#proType .proTypeR p{
    width: 100%;
    margin: 10px 3px;
}
#proType .proTypeR img{
    width: 100%;
}
</style>
