const mock=require('mockjs')
module.exports=(req,res)=>{
    res.set('Access-Control-Allow-Origin','*')
    var result = mock.mock({
        errcode:0,
        msg:'ok',
        'data|6':[
            {
                'id|+1':1,
                'guid':'@guid',
                'title|1':['【满40减20】精选国产香蕉 2只装 约260g/份','科迪纯牛奶100%原生牛奶180ml/袋','米多奇 烤香馍片系列(口味随机) 50g/包','【满40减20】冰糖橙 6-7只装 约750g/份','【满40减20】农村散养 草鸡蛋 10枚 约480g/盒','【满40减20】越南 精选黑美人西瓜  约2.5-3kg/只'],
                'price|1-100.2':10,
                'src|1':['/static/img1/ord (1).jpg','/static/img1/ord (2).jpg','/static/img1/ord (3).jpg','/static/img1/ord (4).jpg'
                ,'/static/img1/ord (5).jpg','/static/img1/ord (6).jpg','/static/img1/ord (7).jpg','/static/img1/ord (8).jpg','/static/img1/ord (9).jpg',
                '/static/img1/ord (10).jpg','/static/img1/ord (11).jpg','/static/img1/ord (12).jpg','/static/img1/ord (13).jpg','/static/img1/ord (14).jpg',
                '/static/img1/ord (15).jpg','/static/img1/ord (16).jpg','/static/img1/ord (22).jpg','/static/img1/ord.jpg','/static/img1/order (8).jpg',
                '/static/img1/order (10).jpg','/static/img1/order (13).jpg','/static/img1/order (15).jpg','/static/img1/order (16).jpg','/static/img1/order (17).jpg'
                ,'/static/img1/order (12).jpg','/static/img1/order (20).jpg','/static/img1/order (34).jpg','/static/img1/order (37).jpg'],
                
                'price2|1-100.1':18,
                'src2|1':['/static/img1/ord (1).jpg','/static/img1/ord (2).jpg','/static/img1/ord (3).jpg','/static/img1/ord (4).jpg'
                ,'/static/img1/ord (5).jpg','/static/img1/ord (6).jpg','/static/img1/ord (7).jpg','/static/img1/ord (8).jpg','/static/img1/ord (9).jpg',
                '/static/img1/ord (10).jpg','/static/img1/ord (11).jpg','/static/img1/ord (12).jpg','/static/img1/ord (13).jpg','/static/img1/ord (14).jpg',
                '/static/img1/ord (15).jpg','/static/img1/ord (16).jpg','/static/img1/ord (22).jpg','/static/img1/ord.jpg','/static/img1/order (8).jpg',
                '/static/img1/order (10).jpg','/static/img1/order (13).jpg','/static/img1/order (15).jpg','/static/img1/order (16).jpg','/static/img1/order (17).jpg'
                ,'/static/img1/order (12).jpg','/static/img1/order (20).jpg','/static/img1/order (34).jpg','/static/img1/order (37).jpg'],
                
                'price3|1-100.2':15,
                'src3|1':['/static/img1/ord (1).jpg','/static/img1/ord (2).jpg','/static/img1/ord (3).jpg','/static/img1/ord (4).jpg'
                ,'/static/img1/ord (5).jpg','/static/img1/ord (6).jpg','/static/img1/ord (7).jpg','/static/img1/ord (8).jpg','/static/img1/ord (9).jpg',
                '/static/img1/ord (10).jpg','/static/img1/ord (11).jpg','/static/img1/ord (12).jpg','/static/img1/ord (13).jpg','/static/img1/ord (14).jpg',
                '/static/img1/ord (15).jpg','/static/img1/ord (16).jpg','/static/img1/ord (22).jpg','/static/img1/ord.jpg','/static/img1/order (8).jpg',
                '/static/img1/order (10).jpg','/static/img1/order (13).jpg','/static/img1/order (15).jpg','/static/img1/order (16).jpg','/static/img1/order (17).jpg'
                ,'/static/img1/order (12).jpg','/static/img1/order (20).jpg','/static/img1/order (34).jpg','/static/img1/order (37).jpg'],
            }
        ]
    })
    res.send(result)
}