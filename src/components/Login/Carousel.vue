<template>
  <div class="carousel-container">
    <el-carousel arrow="never" indicator-position="none">
      <el-carousel-item v-for="item in list" :key="item">
        <img :src="item" style="height: 100%;width: 100%;">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import ad1 from '@/assets/images/ad1.jpg'
import ad2 from '@/assets/images/ad2.jpg'

export default {
  name: '',
  data() {
    return {
      list: [ad1, ad2]
    }
  },
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">
</style>
