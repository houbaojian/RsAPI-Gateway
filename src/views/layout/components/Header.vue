<template>
  <div class="page-header">
    <div class="page-logo vertical">
      <img :src="logo" class="logo">
      <div class="sidebar-toggler" @click="handleSidebarToggler"/>
    </div>
    <div class="top-menu">
      <el-menu class="menu" mode="horizontal" >
        <el-menu-item index="2" class="menu-item user-info" >
          <el-dropdown placement="bottom-end" @command="handleUserCommand">
            <span class="el-dropdown-link">
              <img :src="avatar" class="avatar">
              <span class="username"> {{ name }} </span>
            </span>
            <el-dropdown-menu slot="dropdown" style="width: 195px">
              <el-dropdown-item command="updatePassword">Change Password</el-dropdown-item>
              <el-dropdown-item divided command="logout">Log Out</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import logo from '@/assets/images/logo.png'
import avatar from '@/assets/images/avatar.jpg'
export default {
  name: 'Header',
  data() {
    return {
      logo,
      avatar
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'sidebar'
    ])
  },
  methods: {
    handleSidebarToggler() {
      this.$store.dispatch('ToggleSideBar')
    },
    handleUserCommand(command) {
      this[command]()
    },
    updatePassword() {
      this.$message({
        message: 'Change Password！',
        type: 'success'
      })
    },
    logout() {
      this.$store.dispatch('FedLogOut').then(() => {
        location.reload()
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/variables.scss";
  .page-logo{
    float: left;
    width: 265px;
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;
    .logo{
      padding: 23px 0px;
    }
    .sidebar-toggler{
      float: right;
      margin: 30px 0 0;
      display: block;
      cursor: pointer;
      opacity: .6;
      filter: alpha(opacity=60);
      width: 20px;
      height: 14px;
      background-repeat: no-repeat;
      background-position: center center;
      background-image: url(../../../assets/images/sidebar-toggle.png);
      &:hover{
        opacity: 1;
        filter: alpha(opacity=100);
      }
    }
  }

  .page-sidebar-closed{
    .page-logo{
      width: 84px;
      .logo{
        display: none;
      }
    }
  }

  .top-menu{
    float: right;
    //margin-right: 20px;
    .menu{
      height: $HeaderHeight;
      border: 0px;
      background-color: transparent;
      .menu-item {
        height: 100% !important;
        line-height: $HeaderHeight;
        background-color: transparent;
        border: 0px;
      }
      .user-info {
        //padding: 0px;
        .avatar {
          margin-right: 7px;
          width: 40px;
          height: 40px;
          border-radius: 50% !important;
        }
        .username {
          font-weight: 400;
        }
      }
    }
  }
  .page-sidebar-opened.mobile {
    .top-menu {
      .username {
        display: none;
      }
    }
    .page-logo {
      width: $SideBarWidth;
      position: absolute;
      z-index: 999;
    }
  }
  .mobile{
    .theme-toggle{
      display: none;
    }
  }
</style>
