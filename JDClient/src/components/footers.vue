
<template>
<div>
   <div id="footer">
        <div>
            <router-link to="/">
                <span>&#xe62a;</span>
                <small>首页</small>
            </router-link>
            <router-link to="type">
                <span>&#xe634;</span>
                <small>分类</small>
            </router-link>
            <router-link to="shopcar">
                <span>&#xe618;</span>
                <small>购物车</small>
            </router-link>
            <router-link to="order">
                <span>&#xe7ff;</span>
                <small>订单</small>
            </router-link>
            <router-link to="my">
                <span>&#xe79e;</span>
                <small>我的</small>
            </router-link>
        </div>
    </div>
</div>
 
</template>

<script>
export default {
  
}
</script>

<style>
#footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top:1px solid #E7E9E4;
     background: #ffffff;
}
#footer > div{
    width: 90%;
    margin: 0 auto; 
    display: flex;
    justify-content: space-between;
}
 a{
    text-align: center;
    padding: 10px 0; 
    text-decoration: none;
    color: #000;
}
#footer a small{
    display: block
}
#footer span{
    font-family: iconfont;
    font-size: 20px;
}
.router-link-active:hover{
    color: green;
}
</style>

