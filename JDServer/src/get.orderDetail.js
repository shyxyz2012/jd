const mock=require('mockjs')
module.exports=(req,res)=>{
    res.set('Access-Control-Allow-Origin','*')
    var result = mock.mock({
        errcode:0,
        msg:'ok',
        'data|1-5':[
            {
                'id|+1':1,
                'guid':'@guid',
                'title|1':['优选极速达-夫子庙店','沃尔玛秦淮店','永辉超市-茂业天地','南京鲜丰水果','百果园','来伊份','先声再康-升州路','益丰-南京升州路店','蜜汀蛋糕'],
                'price|1-100.2':10,
                'many|1-4':1,
                'time':'@datetime("M-d H:m")',
                'src|1-3':[
                    {
                        'srcimg|1':['/static/img1/ord (1).jpg','/static/img1/ord (2).jpg','/static/img1/ord (3).jpg','/static/img1/ord (4).jpg'
                        ,'/static/img1/ord (5).jpg','/static/img1/ord (6).jpg','/static/img1/ord (7).jpg','/static/img1/ord (8).jpg','/static/img1/ord (9).jpg',
                        '/static/img1/ord (10).jpg','/static/img1/ord (11).jpg','/static/img1/ord (12).jpg','/static/img1/ord (13).jpg','/static/img1/ord (14).jpg',
                        '/static/img1/ord (15).jpg','/static/img1/ord (16).jpg','/static/img1/ord (22).jpg','/static/img1/ord.jpg','/static/img1/order (8).jpg',
                        '/static/img1/order (10).jpg','/static/img1/order (13).jpg','/static/img1/order (15).jpg','/static/img1/order (16).jpg','/static/img1/order (17).jpg'
                        ,'/static/img1/order (12).jpg','/static/img1/order (20).jpg','/static/img1/order (34).jpg','/static/img1/order (37).jpg']
                }
            ]
            }
        ]
    })
    res.send(result)
}