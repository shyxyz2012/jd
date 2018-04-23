
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
          text: ['单品优惠','满额促销','多买多折','打包价','烧烤吧','果蔬蛋类','肉类家禽','海鲜荟萃','个护美妆','宠物之家','冰激凌','宝贝中心'],
          'childrens|1-3': [
            {
              guid: '@guid',
              text: '@cword(2,5)'
            }
          ]
        }
      ]
    })
  )
}
