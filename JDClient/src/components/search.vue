<template>
  <div id="dianjisearch">
    <!-- 头部 -->
    <div id="searchH">
        <div>
            <span @click="skipIndex()" class="Sarrow">&#xe735;</span>
            <!-- <router-link to="/"><span class="Sarrow">&#xe735;</span></router-link> -->
            <p><span>&#xe62b;</span><input type="text" placeholder="满50送50优惠券"></p>
            <div>搜索</div>
        </div>
    </div>

    <!-- 热门搜索 -->
    <div id="hotSearch">
        <div class="xk y1">热门搜索</div>
        <div class="xl">
            <a href="javascript:;">百果园</a>
            <a href="javascript:;">耙耙柑</a>
            <a href="javascript:;">鲜丰水果</a>
            <a href="javascript:;">饮料</a>
            <a href="javascript:;">酸奶</a>
            <a href="javascript:;">牛奶</a>
            <a href="javascript:;">饼干</a>
            <a href="javascript:;">巧克力</a>
            <a href="javascript:;">薯片</a>
            <a href="javascript:;">香油</a>
            <a href="javascript:;">感冒</a>
            <a href="javascript:;">方便面</a>
        </div>
        <div class="xm">
            <div class="xn y1 a2">搜索历史</div>
        </div>
    </div>


  </div>
</template>

<script>
export default {
  methods:{
      skipIndex(){
          window.location.hash='/'
      }
  }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
#dianjisearch{
    background: #F4F4F4;
    overflow: hidden;
}
/* body,html{
    background: #F4F4F4;
} */
/* 头部 */
#searchH{
    width: 100%;
    margin: 0 auto;
    background: #ffffff;
    padding: 10px 0
}
#searchH > div{
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content:space-between;
}
#searchH > div div{
    padding: 5px 10px;
    background: #E5E5E5;
    border-radius: 5px;
}
#searchH span{
    font-family: iconfont;
    font-size: 20px
}
#searchH span.Sarrow{
    font-size: 28px;
}
#searchH input{
    border: none;
    outline: none;
    font-size: 14px;
    padding-left: 4px;
}
#searchH p{
    padding: 2px 0 2px 5px;
    border-radius: 5px;
    border: 1px solid #ECECEC;
}
#searchH a{
    text-decoration: none;
}

/* 热门搜索 */
#hotSearch{
    width: 100%;
}
#hotSearch .xk{
    padding: 10px;
    padding-left: 28px;
    background-color: #f4f4f4;
    border-top: 1px solid #F2F2F2;
}
#hotSearch .y1{
    background: url(/static/img1/searchbg.png) no-repeat;
    background-size: 44px auto;
    background-position: -5px -90px;
}
#hotSearch .xl{
    padding: 15px 0 0 10px;
    background: #fff;
}
#hotSearch .xl a{
    display: inline-block;
    margin-bottom: 15px;
    margin-right: 3px;
    width: 22%;
    height: 25px;
    line-height: 25px;
    border-radius: 5px;
    background: #fff;
    border: 1px solid #e8e8e8;
    text-align: center;
    text-decoration: none;
    color: #000;
}
#hotSearch .xm{
    padding-bottom: 5px;
    background-color: #f4f4f4;
}
#hotSearch .xm .xn{
    padding: 8px;
    background-position: -8px -49px;
    padding-left: 28px;
    background-color: #f4f4f4;
}
#hotSearch .xm .y1{
    background: url(/static/img1/searchbg.png) no-repeat;
    background-size: 44px auto;
    background-position: -5px -46px;
    border-bottom: 1px solid #F2F2F2;
}
</style>


