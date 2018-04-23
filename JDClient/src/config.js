import jQuery from 'jquery'
export default{
    install(Vue,option){
       Vue.prototype.infiniteScroll = 123
        Vue.prototype.jQuery = jQuery  
        Vue.prototype.apiURL = 'http://127.0.0.1:88'

        // 购物车中数据的存储(双向绑定)
        Vue.prototype.bus = new Vue({
            data:{
                cars:{},
                carnums:{
                    
                }
            }
        })
    }   
}