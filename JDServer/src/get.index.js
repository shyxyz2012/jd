const mock=require('mockjs')
module.exports=(req,res)=>{
    var result = mock.mock({
        errcode:0,
        msg:'ok',
        'data|5':[
            {
                'id|+1':1,
                'guid':'@guid',
                'title':'@ctitle',
                'star|1-5':'★'
            }
        ]
    })
    res.send(result)
}