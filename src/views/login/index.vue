<template>
  <div class="login-container">
    <section class="center-wrap">
      <h3 class="title text-center">个人后台管理系统</h3>  
      <el-form ref="ruleForm">
        <el-form-item prop="name">
          <el-input></el-input>
        </el-form-item>
        <el-form-item prop="name">
          <el-input></el-input>
        </el-form-item>
        <el-form-item prop="name">
            <el-button type="primary" style="width: 100%">login in</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.login-container {
  position: relative;
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
  .center-wrap {
    .title {
        padding: 20px 0;
        color: #fff;
        font-size: 18px;
    }  
    position: absolute;
    margin-left: -250px;
    margin-top: -200px;
    top: 50%;
    left: 50%;
    width: 520px;
    height: 300px;
    
  }
}
</style>

