
const Mock = require('mockjs')
module.exports = (req, res) => {
  res.set('Access-Control-Allow-Origin','*')
  res.json(
    Mock.mock({
      errcode: 0,
      msg: 'ok',
      'data|10-15': [
        {
          guid: '@guid',
          // leftT:['水果蔬菜','肉禽蛋奶','冷热速食','休闲食品','酒水饮料','粮油调味','清洁日化','家居用品','鲜花蛋糕','医药健康'],
          'text|1': ['水果','蔬菜','牛羊猪肉','水产海鲜','蛋类','奶制品','酒','饮料','家用电器','宠物生活','鲜花','蛋糕','中西药品','休闲零食','米面杂粮','低温速食'],
          name:'@cword(2)',
          'childrens|5-9': [
            {
              guid: '@guid',
              text: '@cword(2,3)',
              'src|1':['/static/img/cai13.jpg','/static/img/cai14.jpg','/static/img/cai18.jpg',
              '/static/img/cai19.jpg','/static/img/cai20.jpg','/static/img/cai21.jpg','/static/img/cai8.jpg','/static/img/cai9.jpg'
              ,'/static/img/cai10.jpg','/static/img/cai11.jpg','/static/img/cai12.jpg','/static/img/shui1.jpg','/static/img/shui2.jpg','/static/img/shui3.jpg',
              '/static/img/shui4.jpg','/static/img/shui5.jpg','/static/img/shui6.jpg','/static/img1/ord (1).jpg','/static/img1/ord (2).jpg','/static/img1/ord (3).jpg','/static/img1/ord (4).jpg'
              ,'/static/img1/ord (5).jpg','/static/img1/ord (6).jpg','/static/img1/ord (7).jpg','/static/img1/ord (8).jpg','/static/img1/ord (9).jpg',
              '/static/img1/ord (10).jpg','/static/img1/ord (11).jpg','/static/img1/ord (12).jpg','/static/img1/ord (13).jpg','/static/img1/ord (14).jpg',
              '/static/img1/ord (15).jpg','/static/img1/ord (16).jpg','/static/img1/ord (22).jpg','/static/img1/ord.jpg','/static/img1/order (8).jpg',
              '/static/img1/order (10).jpg','/static/img1/order (13).jpg','/static/img1/order (15).jpg','/static/img1/order (16).jpg','/static/img1/order (17).jpg'
              ,'/static/img1/order (12).jpg','/static/img1/order (20).jpg','/static/img1/order (34).jpg','/static/img1/order (37).jpg'],
            }
          ]
        }
      ]
    })
  )
}
