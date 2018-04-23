
const Mock = require('mockjs')
module.exports = (req, res) => {
  res.set('Access-Control-Allow-Origin','*')
  var text=req.query.ctgtext;
  res.json(
    Mock.mock({
      errcode: 0,
      msg: 'ok',
      ctgText:text,
      'count|10-18':10,//数量
      'data|10-18': [
        {
          guid: '@guid',
          text: '@cword(10,15)',
          'price|1-100.2':0,//价格
          'store|0-10':0,//库存
          'many|100-10000':100,
          'src|1':['/static/img/cai13.jpg','/static/img/cai14.jpg','/static/img/cai18.jpg',
          '/static/img/cai19.jpg','/static/img/cai20.jpg','/static/img/cai21.jpg','/static/img/cai8.jpg','/static/img/cai9.jpg'
          ,'/static/img/cai10.jpg','/static/img/cai11.jpg','/static/img/cai12.jpg','/static/img1/ord (1).jpg','/static/img1/ord (2).jpg','/static/img1/ord (3).jpg','/static/img1/ord (4).jpg'
          ,'/static/img1/ord (5).jpg','/static/img1/ord (6).jpg','/static/img1/ord (7).jpg','/static/img1/ord (8).jpg','/static/img1/ord (9).jpg',
          '/static/img1/ord (10).jpg','/static/img1/ord (11).jpg','/static/img1/ord (12).jpg','/static/img1/ord (13).jpg','/static/img1/ord (14).jpg',
          '/static/img1/ord (15).jpg','/static/img1/ord (16).jpg','/static/img1/ord (22).jpg','/static/img1/ord.jpg','/static/img1/order (8).jpg',
          '/static/img1/order (10).jpg','/static/img1/order (13).jpg','/static/img1/order (15).jpg','/static/img1/order (16).jpg','/static/img1/order (17).jpg'
          ,'/static/img1/order (12).jpg','/static/img1/order (20).jpg','/static/img1/order (34).jpg','/static/img1/order (37).jpg']
        }
      ]
    })
  )
}
