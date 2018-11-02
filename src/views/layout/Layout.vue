<template>
  <div class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
    <app-header/>
    <div class="page-container">
      <app-side-bar/>
      <app-main/>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import { AppHeader, AppSideBar, AppMain, AppFooter } from './components'

export default {
  name: 'Layout',
  components: {
    AppHeader,
    AppSideBar,
    AppMain,
    AppFooter
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 990;
  }
</style>
