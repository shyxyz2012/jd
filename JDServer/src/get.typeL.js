const Mock = require('mockjs')
module.exports = (req, res) => {
  res.set('Access-Control-Allow-Origin','*')
  res.json(
    Mock.mock({
      errcode: 0,
      msg: 'ok',
      'data|10': [
        {
          guid: '@guid',
          leftT:['水果蔬菜','肉禽蛋奶','冷热速食','休闲食品','酒水饮料','粮油调味','清洁日化','家居用品','鲜花蛋糕','医药健康'],
        }
      ]
    })
  )
}