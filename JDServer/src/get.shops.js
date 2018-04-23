const mock=require('mockjs')
module.exports=(req,res)=>{
    res.set('Access-Control-Allow-Origin','*')
    var result = mock.mock({
        errcode:0,
        msg:'ok',
        'data|5':[
            {
                'id|+1':1,
                'guid':'@guid',
                'title|1':['优选极速达-夫子庙店','沃尔玛秦淮店','永辉超市-茂业天地'],
                'star|1-5':'★',
                'many|500-4000':500,
                'juli|500-10000':500,
                'money|4-15':4,
                'time|10-60':10,
                'src|1':['/static/img/sup1.png','/static/img/sup2.png','/static/img/sup3.png','/static/img/sup4.png'
                ,'/static/img/sup5.jpg','/static/img/sup6.png','/static/img/sup7.png','/static/img/sup8.png','/static/img/sup9.png',
                '/static/img/sup10.png','/static/img/sup11.jpg','/static/img/sup12.jpg','/static/img/sup14.jpg']
            }
        ]
    })
    res.send(result)
}