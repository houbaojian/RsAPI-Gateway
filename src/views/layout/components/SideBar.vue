<template>
  <div class="page-sidebar">
    <el-menu
      :default-active="$route.path"
      :collapse="isCollapse"
      :collapse-transition="false"
      :router="true"
      class="sidebar-menu"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="/dashboard">
        <i class="el-icon-menu"/>
        <span slot="title">Dashboard</span>
      </el-menu-item>
      <el-menu-item index="/form">
        <i class="el-icon-edit-outline"/>
        <span slot="title">Form</span>
      </el-menu-item>

      <el-menu-item index="/table">
        <i class="el-icon-setting"/>
        <span slot="title">Table</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SideBar',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
</style>
