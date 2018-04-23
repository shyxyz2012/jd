
import Vue from 'vue'//路由文件中必须重新引入vue，否则提示vue未定义
import Router from 'vue-router'//引入路由
Vue.use(Router)
import home from './components/home.vue'
import index from './components/index.vue'
import type from './components/type.vue'
import shopcar from './components/shopcar.vue'
import order from './components/order.vue'
import my from './components/my.vue'
import shop from './components/shop.vue'
import login from './components/login.vue'
import shopProDetail from './components/shopProDetail.vue'
import proImgDetail from './components/proImgDetail.vue'
import orderdetail from './components/orderdetail.vue'
import regist from './components/regist.vue'
import search from './components/search.vue'


import footers from './components/footers.vue'

const router=new Router({
    routes:[
        {
            path:'/',
            components:{
                a:home,
                b:index,
                c:footers
            }
        },
        {
            path:'/home',
            component:home
        }
        , {
            path:'/index',
            component:index
        }
        , {
            path:'/type',
            components:{
                a:type,
                c:footers
            }
        },
        {
            path:'/shopcar',
            components:{
                a:shopcar,
                c:footers
            }
        },
        {
            path:'/order',
            components:{
                a:order,
                c:footers
            }
        },
        {
            path:'/my',
            components:{
                a:my,
                c:footers
            }
        },
        {
            path:'/footers',
            component:footers
        },
        {
            path:'/shop/:guid/:title/:time',
            component:shop,
            props:true
        },
        {
            path:'/shop/:guid/:title/:time/shopProDetail',
            component:shopProDetail
        },
        {
            path:'/shop/:guid/:title/:time/shopProDetail/proImgDetail',
            component:proImgDetail
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/orderdetail',
            component:orderdetail
        },
        {
            path:'/regist',
            component:regist
        },
        {
            path:'/search',
            component:search
        }
    ]
})//生成路由对象


// 将路由结果返回(两种方式)
// module.exports=router
export default router