<template>
    <div>
         <!-- 头部 -->
        <div id="loginHeader">
            <div>
               <router-link to="/login"><span>&#xe735;</span></router-link>
               <span>京东注册</span> 
            </div>
        </div>
        <form action="">
            <div class="registPhone">
                <b>+86</b><span>&#xe665;</span><input @focus="inpF()" @blur="inpB()" type="text" placeholder="请输入手机号"><label @click="clearVal()">&#xe604;</label>
            </div>
            <p>sdsd</p>
            <div class="registBtn">
                <img src="/static/img1/init.gif" alt="">
                <span @click="successBtn()">点击完成验证</span>
            </div>
        </form>

        <!--注册协议部分 -->
        <div id="registHttp">
            <div class="registHttpHide">
                <h3>注册协议及隐私政策</h3>
                <div class="httpScroll">
                    <p>
                        在您注册成为京东用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，
                        <a href="javascript:;">请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗
                            体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：</a>
                    </p>
                    <p class="http1">《京东用户注册协议》</p>
                    <p class="http1">《用户隐私政策》</p>
                    <p class="http1">《订单共享与安全》</p>
                    <p>
                        <a href="">【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的商
                        品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册
                        流程后，即表示您已充分阅读、理解并接受协议的全部内容；并表明您也同意京东可以依据以上的隐私政策内容来处理您的个人信息。</a>
                        如您对以上协议内容有任何疑问，您可随时与京东客服联系。
                    </p>
                </div>
                <div class="agreenBtn">
                    <p>
                        点击同意即表示您已阅读并同意<a href="">《京东用户注册协议》</a>与<a href="">《京东隐私政策》</a>
                        并将您的订单信息共享给为完成此订单所必须的第三方合作方。关于<a href="">《订单共享与安全》</a>
                    </p>
                    <div class="yesorno">
                        <a href="#/login">不同意</a>
                        <label href="" @click="yesBtn()">同意</label>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  data(){
      return{}
  },
  methods:{
    //   注册验证
      inpF(){
          var $=this.jQuery
          $('.registPhone label').show()
      },
      inpB(){
          var $=this.jQuery
          $('.registPhone label').hide()
      },
      clearVal(){
          var $=this.jQuery
          $('.registPhone input').val(' ')
      },
      successBtn(){
          var $=this.jQuery
          var inpVal=$('.registPhone input').val()
          var regex=/^1\d{10}$/
          if(!inpVal=='' && regex.test(inpVal)){
              window.location.hash='/login'
              $('form p').css("display","none")
          }
          else if(inpVal.length<11){
              $('form p').css("display","block")
              $('form p').html('手机号不能少于11位')
          }
          else{
              $('form p').css("display","block")
              $('form p').html('请输入正确的手机号')
          }
      },

    // 是否同意注册协议
    // noBtn(){
    //    window.location.hash='#/login' 
    // },
     yesBtn(){
       var $=this.jQuery
       $('#registHttp').hide()
    }
  }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
/* html,body{
    background: #F7F7F7;
} */
/* 头部 */
#loginHeader{
    width: 100%;
    border-bottom: 1px solid #bbb;
    background: #f9f9f9;
    padding: 7px 0;
    overflow: hidden;
}
#loginHeader > div{
    width: 60%;
    background: red
}
#loginHeader span:nth-child(1){
    font-size: 24px;
    font-family: iconfont;
    color: #bbb;
    float: left;
    margin-left: 10px;
}
#loginHeader span:nth-child(2){
    font-size: 16px;
    color: #bbb;
    float: right;
}

.registPhone{
    width: 90%;
    margin: 20px auto 10px auto;
    background: #ffffff;
    border-radius: 5px;
    padding:15px 5px;
    font-size: 12px;
}
.registPhone span{
    font-family: iconfont;
    color: gray;
    padding: 0 2px;
}
.registPhone input{
    border: none;
    padding: 0 10px;
    outline: none;
    color: #000;
}
.registPhone label{
    font-family: iconfont;
    color: #EEE;
    font-size: 24px;
    float: right;
    display: none;
}

.registBtn{
    width: 90%;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 5px;
    padding:10px 5px;
    font-size: 12px;
    border: 1px solid #9DCCFC;
    color: #9DCCFC;
    overflow: hidden;
}
.registBtn img{
    width: 10%;
    float: left;
}
.registBtn span{
    float: left;
    padding: 6px 0 0 10px;
    font-size: 14px
}

form p{
    width: 90%;
    margin: 0 auto;
    padding: 0 0 5px 0;
    display: none;
    color: red;
    font-size: 12px;
}

/* 注册协议部分 */
#registHttp{
    width: 100%;
    height: 100%;
    background: rgba(126, 125, 125, 0.5);
    position: absolute;
    top: 0;
}
#registHttp > div{
    width: 100%;
    background: #F8F8F8;
    position: fixed;
    bottom: 0;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}
#registHttp h3{
    text-align: center;
    border-bottom: 1px solid #eeeeee;
    padding: 10px 0;
}
#registHttp .httpScroll{
    height: 180px;
    overflow-x: hidden;
    overflow-y: scroll;
    margin: 15px auto;
}
#registHttp .httpScroll p:nth-child(1),#registHttp .httpScroll p:nth-child(5){
    width: 90%;
    margin: 0 auto;
    font-size: 14px;
}
#registHttp .httpScroll p:nth-child(1) a,#registHttp .httpScroll p:nth-child(5) a{
    font-weight: bold;
    color: #000;
}
#registHttp .httpScroll p.http1{
    padding: 2px 10px
}
#registHttp .agreenBtn p{
    font-weight: bold;
    font-size: 14px;
    width: 90%;
    margin: 0 auto;
}
#registHttp .agreenBtn a{
    color: #E93B3D;
}
#registHttp .yesorno{
    width: 85%;
    margin: 15px auto;
    display: flex;
    justify-content: space-between;
}
#registHttp .yesorno a,#registHttp .yesorno label{
    text-decoration: none;
    font-size: 14px;
    border-radius: 5px;
    display: block;
    text-align: center;
    padding: 8px 40px;
}
#registHttp .yesorno a:nth-child(1){
    border: 1px solid #D7D7D7;
    color: #000;
}
#registHttp .yesorno label{
    background: #E93B3D;
    color: #ffffff;
}
</style>
