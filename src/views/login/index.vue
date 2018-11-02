<template>
  <div class="login-container">
    <div class="logo"><img :src="logo"></div>
    <div class="introduce login-introduce">
      <Carousel/>
    </div>
    <div class="content login-content vetically">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-position="left" label-width="0px" class="form login-form">
        <h1>Admax Sign In</h1>
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" name="username" type="text" placeholder="Cell-phone number or Email" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" :type="pwdType" name="password" placeholder="Password" @keyup.enter.native="handleLogin"/>
          <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span>
        </el-form-item>
        <div class="link">
          <router-link :to="{ path: '/Login' }">Forgot Password?</router-link>
          |
          <router-link :to="{ path: '/Login' }">Create a Account</router-link>
        </div>
        <el-form-item>
          <el-button :loading="loading" type="primary" style="width:100%;" class="login-btn" @click.native.prevent="handleLogin" >
            LOGIN
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { isvalidPhoneNum, isvalidEmail } from '@/utils/validate'
import Carousel from '@/components/Login/Carousel.vue'
import logo from '@/assets/images/logo.png'
export default {
  components: {
    Carousel
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (isvalidPhoneNum(value) || isvalidEmail(value)) {
        callback()
      } else {
        callback(new Error('Please input the correct Cell-phone number or Email.'))
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password should not be less than 6 bits.'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'fightingxhj@163.com',
        password: '123456'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password',
      logo,
      redirectURL: '/'
    }
  },

  mounted() {
    const rediretUrl = this.$route.query.ref
    if (rediretUrl) {
      this.redirectURL = rediretUrl
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push(this.redirectURL)
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
</style>

