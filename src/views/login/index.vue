<template>
  <div class="login-container">
    <section class="center-wrap">
      <h3 class="title text-center">个人后台管理系统</h3>
      <el-form class="login-form" :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="width: 100%" :loading="loading" @click="handleLogin">login in</el-button>
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
			loading: false,
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
		};
	},
	created() {
		let _this = this;
		// 添加keydown事件
		document.onkeydown = function(e) {
			let key = window.event.keyCode;
			if (key === 13) {
				_this.handleLogin();
			}
		};
	},
	computed: {
		...mapGetters(['username'])
	},
	methods: {
		handleLogin() {
			this.$refs['ruleForm'].validate((valid) => {
				if (valid) {
					this.$store.dispatch('LoginByUsername', this.ruleForm).then(() => {
						this.$router.push('/');
					});
				} else {
					return false;
				}
			});
		}
	},
};
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
  /deep/input::-webkit-input-placeholder{
      color:#606266;
      font-size: 12px;
  }
  /deep/input::-moz-placeholder{   /* Mozilla Firefox 19+ */
      color:#606266;
      font-size: 12px;
  }
  /deep/input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
      color:#606266;
      font-size: 12px;
  }
  /deep/input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
      color:#606266;
      font-size: 12px;
  }
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

