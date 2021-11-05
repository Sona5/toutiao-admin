<template>
  <div class="login-container">
  <!--
    el-form 表单组件
    每个表单项都必须使用el-form-item 组件包裹
    -->
  <el-form class="login-form" ref="form" :model="form">
    <!-- <el-form-item >
      <div class="login-head"></div>
    </el-form-item> -->
  <el-form-item >
    <el-input v-model="form.mobile"
    placeholder="请输入手机号："></el-input>
  </el-form-item>
    <el-form-item>
      <el-input v-model="form.code"
      placeholder="请输入密码：">
    </el-input>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
    </el-form-item>
  <el-form-item>
    <el-button class="login-btn" type="primary" @click="onlogin">登录</el-button>
  </el-form-item>
  </el-form>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      form: {
        mobile: '',
        code: '',
        checked: false
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onlogin () {
      const user = this.user
      request({
        methods: 'POST',
        url: '/mp/v1_0/authorizations',
        data: user
      }).then(res => {
        console.log('res')
        this.$message({
          message: '登录成功',
          type: 'success'
        })
      }).catch(err => {
        console.log('登录失败', err)
        this.$message.error('登录失败，手机号或验证码错误')
      })
    }
  }
}
</script>

<style scoped lang="less">
  .login-container {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("./login_bg.png") no-repeat;
    background-size: cover;
  }
  .login-form {
      background: rgba(255, 255, 255, 0.5);
      padding: 15px;
      width: 20%;
    }
    .login-btn {
     width: 100%;
    }
    /* .login-head {
      background: url("./login_head.jpg") no-repeat;
      background-size:cover;
      width: 100%;
      height: 30px;
    } */
</style>
