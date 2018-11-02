<template>
  <div id="app" :class="classObj">
    <router-view/>
  </div>
</template>

<script>
import ResizeMixin from '@/utils/ResizeHandler'
export default {
  name: 'App',
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        'page-sidebar-closed': !this.sidebar.opened,
        'page-sidebar-opened': this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  }
}
</script>
