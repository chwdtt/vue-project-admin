<template>
  <div class="login-container">
    <section class="center-wrap">
      <h3 class="title text-center">个人后台管理系统</h3>  
      <el-form class="login-form" :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="width: 100%">login in</el-button>
            <div class="default-login-info">
              <span>账号：{{username}}</span><span class="ml-20">密码：any</span>
            </div>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'login',
    data() {
        return {
            ruleForm: {
                username: '',
                password: ''
            },
            rules: {
              username: [
                { required: true, message: '请输入用户名', trigger: 'blur' }
              ],
              password: [
                { required: true, message: '请输入密码', trigger: 'blur' }
              ]

            }
        }
    },
    computed: {
      ...mapGetters(['username'])
    }
}
</script>

<style lang="scss" scoped>
// 自定义宽度 --- 可自行配置
$w520: 520;
$w400: 400;
$w320: 320;
$w300: 300;
@function handleWidthLoginWrap($args) { 
  @return $args + px; 
}
.login-container {
  position: relative;
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
  /deep/.login-form input {
      background: transparent;
      outline: none;
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #fff;
  }
  /deep/.el-input__inner:focus {
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .center-wrap {
    .title {
        padding: 20px 0;
        color: #fff;
        font-size: 18px;
    }  
    position: absolute;
    margin-left: handleWidthLoginWrap(-$w320/2);
    margin-top: -200px; //固定
    top: 50%;
    left: 50%;
    width: handleWidthLoginWrap($w320);
    .default-login-info {
      color: #fff;
    }
  }
}
</style>

