<template>
    <div class="aside-wrap">
        <el-menu
        router
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="rgb(48, 65, 86)"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    </div>
</template>
<style lang="scss" scoped>
.aside-wrap {
    height: 100%;
    /deep/.el-menu-item:hover {
        background: rgb(38, 52, 69)!important;
    }
}
</style>
