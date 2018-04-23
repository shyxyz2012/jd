<template>
    <div id="loginxyzshy">
        <!-- 头部 -->
        <div id="loginHeader">
            <div>
               <router-link to="/my"><span>&#xe735;</span></router-link>
               <span>京东登录</span> 
            </div>
        </div>

        <!-- 登录方式 -->
        <div id="loginMethod">
             <div class="loginTitle">
                <ul>
                    <li @click="oneLogin()" class="active oneL"><a href="javascript:;">账号密码登录</a></li>
                    <li @click="twoLogin()" class="twoL"><a href="javascript:;">短信验证码登录</a></li>
                </ul>
            </div>
             <div class="loginDetail">
                <div>
                    <div class="userName">
                        <p>账号</p>
                        <input @focus="focusname()" @blur="blurname()" type="text" placeholder="用户名/邮箱/已验证手机" id="username">
                        <span>&#xe604;</span>
                    </div>
                    <p class="errinfo errinfo1"></p>
                    <div class="psw">
                        <p>密码</p>
                        <input @focus="focuspsw()" @blur="blurpsw()" type="password" placeholder="请输入密码" id="psw">
                        <span>&#xe604;</span>
                    </div>
                    <p class="errinfo errinfo2"></p>
                </div>
                <div>
                    <div class="dx">
                        <b>+86</b><small>&#xe665;</small><input @blur="blurdx()" @focus="focusdx()" type="text" placeholder="请输入手机号"><button @click="showyzm()">获取验证码</button>
                    </div>
                    <small class="dxErr"></small>
                    <div class="inputdx"><input type="text" @focus="focusyzm()" @blur="bluryzm()" placeholder="请输入收到的验证码"> <span></span></div>
                    <small class="dxyzm"></small>
                    <p class="duanxinInfo">ewew</p>
                </div>
            </div>
        </div>

        <!-- 登录，一键登录 -->
        <div class="loginOne" @click="loginBtn()">登录</div>
        <div class="loginTwo" @click="loginTwo()">一键登录</div>
        <div class="loginThree">
            <p><span>&#xe632;</span>忘记密码</p>
            <router-link to="/regist"><p><span>&#xe633;</span>手机快速注册</p></router-link>
        </div>

        <!-- 其他登录方式 -->
        <div id="otherLogin">
            <div class="a0m">
                <h2 class="a0l">其他登录方式</h2>
            </div>
            <div class="loginIcon">
                <span>&#xe60a;</span>
                <span>&#xe628;</span>
            </div>
            <div class="otherLoginLast">登录即代表您已同意京东隐私政策</div>
        </div>

        
    </div>
</template>

<script>
export default {
  data(){
      return{}
    },

  methods:{
    //   账号登录和短信登录的切换
    twoLogin(){
        var $=this.jQuery
        $('.oneL').removeClass('active')
        $('.loginDetail > div:nth-child(1)').css({"display":"none"})
        $('.loginDetail > div:nth-child(2)').css({"display":"block"})
        $('.twoL').addClass('active')
        },
    oneLogin(){
        var $=this.jQuery
        $('.twoL').removeClass('active')
        $('.loginDetail > div:nth-child(1)').css({"display":"block"})
        $('.loginDetail > div:nth-child(2)').css({"display":"none"})
        $('.oneL').addClass('active')
        },

    // 输入框获取焦点叉号显示，失去焦点叉号隐藏(用户名)
    focusname(){
        var $=this.jQuery
        $('.userName span').show()
        $('.errinfo1').hide()
    },
    blurname(){
        var $=this.jQuery
        $('.userName span').hide()

        var nameVal=$('.userName input').val()
        var patter1=/^[a-zA-Z0-9]{6,10}$|^1\d{10}$|^[0-9]\d{6-9}@qq\.com/
        if(nameVal==''){
            $('.errinfo1').show()
            $('.errinfo1').html('账号不能为空')
        }
        else if(!patter1.test(nameVal)){
            $('.errinfo1').show()
             $('.errinfo1').html('账号输入错误')
        }
    },

    // 输入框获取焦点叉号显示，失去焦点叉号隐藏(密码)
    focuspsw(){
        var $=this.jQuery
        $('.psw span').show()
        $('.errinfo2').hide()
    },
    blurpsw(){
        var $=this.jQuery
        $('.psw span').hide()

        var pswVal=$('.psw input').val()
        var patter2=/^[0-9A-Za-z]\w{6,10}/
        if(pswVal==''){
            $('.errinfo2').show()
            $('.errinfo2').html('密码不能为空')
        }
        else if(!patter2.test(pswVal)){
            $('.errinfo2').show()
            $('.errinfo2').html('密码输入错误')
        }
        
    },

     // 点击让验证码显示
    showyzm(){
        var $=this.jQuery
        // 随机生成4位数验证码
        var str=''
        for(var i=0;i<4;i++){
            str+=parseInt(Math.random()*10)
        }
        $('.inputdx span').html(str)
         $('.inputdx span').show()

    },

    // 短信登录验证手机号和验证码
    focusdx(){
        var $=this.jQuery
        $('.dxErr').hide()
    },
    blurdx(){
        var $=this.jQuery
        var pattern3=/^13|18|15|17\d{9}^/
        var dxVal=$('.dx input').val()
        if(dxVal==''){
             $('.dxErr').show()
            $('.dxErr').html('手机号不能为空')
        }
        else if(!pattern3.test(dxVal)){
            $('.dxErr').show()
            $('.dxErr').html('请输入正确的手机号')
        }
        else if(pattern3.test(dxVal)){
            $('.dxErr').hide()
        }
    },
    focusyzm(){
        var $=this.jQuery
        $('.dxyzm').hide()
    },
    bluryzm(){
        var $=this.jQuery
        var yzmVal=$('.inputdx input').val()
        var spanVal=$('.inputdx span').html()
        if(yzmVal==''){
            $('.dxyzm').show()
            $('.dxyzm').html('验证码不能为空')
        }
        else if(yzmVal!=spanVal){
            $('.dxyzm').show()
            $('.dxyzm').html('验证码输入错误')
        }
    },


    // 点击登录按钮
    loginBtn(){
        var $=this.jQuery
        var nameVal=$('.userName input').val()
        var pswVal=$('.psw input').val()
        var patter1=/^1[0-9]\d10$/
        var patter2=/^[a-zA-Z0-9]{6,18}/
        if(nameVal==''&&pswVal==''){
            $('.errinfo').show()
            $('.errinfo1').html('账号不能为空')
            $('.errinfo2').html('密码不能为空')
        }
        else{
            window.location.hash='/'
        }
    },

    // 点击一键登录按钮
    loginTwo(){
        var $=this.jQuery
        var pattern3=/^13|18|15|17\d{9}^/
        var dxVal=$('.dx input').val()
        var yzmVal=$('.inputdx input').val()
        var spanVal=$('.inputdx span').html()
        if(dxVal==''&&yzmVal==''){
            $('.dxyzm').show()
            $('.dxyzm').html('验证码不能为空')
            $('.dxErr').show()
            $('.dxErr').html('手机号不能为空')
        }
        else if(!pattern3.test(dxVal)){
             $('.dxErr').show()
            $('.dxErr').html('手机号输入错误')
        }
        else if(yzmVal!=spanVal){
            $('.dxyzm').show()
            $('.dxyzm').html('验证码输入错误')
        }
        else{
            window.location.hash='/'
        }
    }

   

  }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
#loginxyzshy{
    background: #ffffff;
}
#loginxyzshy #loginMethod{
    width: 90%;
    margin: 10px auto
}
.duanxinInfo{
    font-size: 12px;
    color: red;
    display: none;
}
/* 头部 */
#loginxyzshy #loginHeader{
    width: 100%;
    border-bottom: 1px solid #bbb;
    background: #f9f9f9;
    padding: 7px 0;
    overflow: hidden;
}
#loginxyzshy #loginHeader > div{
    width: 60%;
    background: red
}
#loginxyzshy #loginHeader span:nth-child(1){
    font-size: 24px;
    font-family: iconfont;
    color: #bbb;
    float: left;
    margin-left: 10px;
    background: #f9f9f9;
}
#loginxyzshy #loginHeader span:nth-child(2){
    font-size: 16px;
    color: #bbb;
    float: right;
    background: #f9f9f9;
}

/* 登录方式 */
#loginxyzshy .loginTitle{
    width: 100%;
    border-bottom: 1px solid #EBEBEB;
    font-size: 14px;
    overflow: hidden;
}
#loginxyzshy .loginTitle ul{
    width: 90%;
    margin: 0 auto;
}
#loginxyzshy .loginTitle li{
    list-style: none;
    float: left;
    width: 50%;
    text-align: center;
}
#loginxyzshy .loginTitle li a{
    text-decoration: none;
    color: #000;
    display: block;
    padding:10px 0; 
}
#loginxyzshy .loginTitle li.active a{
    border-bottom: 1px solid red;
}
#loginxyzshy .loginDetail > div:nth-child(2){
    display: none;
}

/* 账号密码登录 */
#loginxyzshy .loginDetail > div{
    width: 90%;
    margin: 0 auto;
    padding: 10px 0;
} 
#loginxyzshy .loginDetail .userName{
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 10px 0 15px 0;
    background-color: #fff;
    border-bottom: 1px solid #d7d7d7;
    box-sizing: border-box;
}
#loginxyzshy .loginDetail .psw{
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 10px 0 15px 0;
    background-color: #fff;
    border-bottom: 1px solid #d7d7d7;
    box-sizing: border-box;
}
#loginxyzshy .loginDetail .userName > p,.loginDetail .psw > p{
    display: inline-block;
    font-size: 14px;
    width: 20%;
}
#loginxyzshy .loginDetail .userName input,.loginDetail .psw input{
    border: none;
    outline: none;
    font-size: 14px;
}
#loginxyzshy .loginDetail .userName span,.loginDetail .psw span{
    font-family: iconfont;
    color: #EEEEEE;
    font-size: 24px;
    display: none;
}
#loginxyzshy .errinfo{
    color: red;
    font-size: 12px;
    display: none;
}
/* 短信验证码登录 */
#loginxyzshy .loginDetail .dx,.loginDetail .inputdx{
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 10px 0 15px 0;
    background-color: #fff;
    border-bottom: 1px solid #d7d7d7;
    box-sizing: border-box;
}
#loginxyzshy .loginDetail .dx input{
    width: 45%;
    margin: 0 10px 0 5px;
    border: none;
    outline: none;
}
#loginxyzshy .loginDetail .inputdx input{
    margin: 0 10px 0 5px;
    border: none;
    outline: none;
}
#loginxyzshy .loginDetail .inputdx span{
   display: none;
}
#loginxyzshy .loginDetail .dx b{
    font-size: 14px;
}
#loginxyzshy .loginDetail .dx small{
    font-family: iconfont;
    color: gray;
}
#loginxyzshy .loginDetail .dx button{
    border: none;
    background: none;
    outline: none;
}
.dxErr,.dxyzm{
    color: red;
    display: none;
}

 /* 登录，一键登录 */
#loginxyzshy .loginOne,.loginTwo{
    width: 90%;
    margin: 10px auto;
    font-size: 14px;
    text-align: center;
    border-radius: 5px;
    padding: 15px 0;
}
#loginxyzshy .loginOne{
    background: #EEEEEE;
    color: #848689
}
#loginxyzshy .loginTwo{
    border: 1px solid #F23030;
    color: #F23030;
}
#loginxyzshy .loginThree{
    width: 90%;
    margin: 20px 5% 100px 5%;
    display: flex;
    justify-content: space-between; 
    font-size: 12px;
}
#loginxyzshy .loginThree a{
    text-decoration: none;
    color: #000;
}
#loginxyzshy .loginThree span{
    font-family: iconfont;
    color: gray;
    font-size: 16px;
}

/* 其他登录方式 */
#loginxyzshy #otherLogin{
    width: 90%;
    margin: 0 auto;
}
#loginxyzshy #otherLogin .a0m{
    position: relative;
    margin: 10px auto;
}
#loginxyzshy #otherLogin .a0m:before {
    content: '';
    position: absolute;
    top: 9px;
    left: 0;
    right: 70%;
    border-top: 1px solid #EBEBEB;
}
#loginxyzshy #otherLogin .a0m:after {
    content: '';
    position: absolute;
    left: 70%;
    top: 9px;
    right: 0;
    border-top: 1px solid #EBEBEB;
}
#loginxyzshy #otherLogin .a0l {
    position: relative;
    width: 32%;
    margin: 0 auto;
    font-size: 15px;
    line-height: 18px;
    color: #C4C4C4;
    text-align: center;
}
#loginxyzshy #otherLogin .loginIcon{
    width: 50%;
    margin: 20px 25% 10px 25%;
    display: flex;
    justify-content: space-between;
}
#loginxyzshy #otherLogin .loginIcon span{
    font-family: iconfont;
    font-size: 26px;
}
#otherLogin .loginIcon span:nth-child(1){
    color: #99CBFF
}
#loginxyzshy #otherLogin .loginIcon span:nth-child(2){
    color: #C0E7B3
}
#loginxyzshy #otherLogin .otherLoginLast{
    width: 75%;
    text-align: center;
    margin: 10px auto;
    font-size: 14px;
    color: #7B7B7B;
}
</style>
