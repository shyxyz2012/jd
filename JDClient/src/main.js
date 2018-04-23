

import Vue from 'vue'
import router from './router.js'//从另一个文件中引入路由

import infiniteScroll from 'vue-infinite-scroll'//滚动鼠标自动加载数据
Vue.use(infiniteScroll)

// 将全局变量放在config.js中，然后再main.js中引入config.js
import config from './config.js'
Vue.use(config)

// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
    el:'#app',
    router:router,//可简写为：“router”
    template:`<div>
        <router-view name="a"></router-view><router-view name="b"></router-view>
        <router-view name="c"></router-view> <router-view></router-view>
    </div>`,
})