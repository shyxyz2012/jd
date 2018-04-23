<template>
    <div>
        <div class="imgDel">
            <p><img src="/static/img1/del1.jpg"></p>
            <p><img src="/static/img1/del2.jpg"></p>
            <p><img src="/static/img1/del3.jpg"></p>
            <p><img src="/static/img1/del4.jpg"></p>
            <p><img src="/static/img1/del5.jpg"></p>
            <p><img src="/static/img1/del.jpg"></p>
            <p><img src="/static/img1/del6.jpg"></p>
            <p><img src="/static/img1/del7.jpg"></p>
            <p><img src="/static/img1/del8.jpg"></p>
        </div>

        <div id="grayNav">
            <el-dropdown :hide-on-click="false">
                <span class="el-dropdown-link grayspan">
                    <i class="el-icon-more"></i>
                </span>
                <el-dropdown-menu slot="dropdown" class="bgRgb">
                    <router-link to="/"><el-dropdown-item class="bgRgbone">首页</el-dropdown-item></router-link>
                    <router-link to="/type"><el-dropdown-item class="bgRgbone">分类</el-dropdown-item></router-link>
                    <router-link to="/shopcar"><el-dropdown-item class="bgRgbone">购物车</el-dropdown-item></router-link>
                    <router-link to="/my"><el-dropdown-item class="bgRgboneo">我的</el-dropdown-item></router-link>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        
    </div>
</template>

<script>
export default {};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.imgDel {
  width: 100%;
}
.imgDel p img {
  width: 100%;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}
  .el-icon-arrow-down {
    font-size: 12px;
}
#grayNav{
    background: rgba(51,51,51,0.9);
    position: fixed;
    right: 0px;
    bottom: 100px;
    z-index: 20000;
}
#grayNav i{
    color: #ffffff;
    padding: 6px 7px;
}
.bgRgb{
    background: rgba(51,51,51,0.9);
}
.bgRgbone{
    border-bottom: 1px solid #ffffff;
    color: #ffffff
}
.bgRgboneo{
    border-bottom: none;
    color: #ffffff
}
</style>


