<template>
  <div class="page-main">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="scss">

</style>
