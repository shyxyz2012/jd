

const express=require('express')

const app=express()
app.use(express.static('./static'))

// 接收所有请求（get,post）<*代表所有的请求路由和路径>
app.all('/*',(req,res,next)=>{
    res.set('Access-Control-Allow-Origin','*')//解决跨域问题
    next()//继续匹配下一个路由
})

app.get('/index',require('./src/get.index.js'))
app.get('/shops',require('./src/get.shops.js'))
app.get('/ctgs',require('./src/get.ctgs.js'))
app.get('/goods',require('./src/get.goods.js'))
app.get('/types',require('./src/get.typeR.js'))
app.get('/type',require('./src/get.typeL.js'))
app.get('/shopDetails',require('./src/get.shopDetail.js'))
app.get('/orders',require('./src/get.orderDetail.js'))
app.get('/prolikes',require('./src/get.prolike.js'))

app.listen(88)