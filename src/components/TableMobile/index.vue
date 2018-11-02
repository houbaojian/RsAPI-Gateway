<template>
  <div class="table-Mobile">
    <template v-for="(data, index) in list">
      <div :key="data.id" :class="data.status | statusFilter" class="mobile-module" >
        <div class="mobile-tr">
          <div class="mobile-td title">ID</div>
          <div class="mobile-td content">{{ index + 1 }}</div>
          <div class="clearfix"/>
        </div>
        <div class="mobile-tr">
          <div class="mobile-td title">Title</div>
          <div class="mobile-td content">{{ data.title }}</div>
          <div class="clearfix"/>
        </div>
        <div class="mobile-tr">
          <div class="mobile-td title">Author</div>
          <div class="mobile-td content">{{ data.author }}</div>
          <div class="clearfix"/>
        </div>
        <div class="mobile-tr">
          <div class="mobile-td title">Pageviews</div>
          <div class="mobile-td content">{{ data.pageviews }}</div>
          <div class="clearfix"/>
        </div>
        <div class="mobile-tr">
          <div class="mobile-td title">Status</div>
          <div class="mobile-td content">
            <el-tag :type="data.status | statusFilter">{{ data.status }}</el-tag>
          </div>
          <div class="clearfix"/>
        </div>
        <div class="mobile-tr">
          <div class="mobile-td title">Display_time</div>
          <div class="mobile-td content"> <i class="el-icon-time"/> {{ data.display_time }}</div>
          <div class="clearfix"/>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  props: {
    'list': {
      type: Array,
      default: []
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/variables.scss";
  .table-Mobile{
  .mobile-module{
    background-color: #ffffff;
    margin-bottom: 20px;
    padding: 10px;

    &.success{
      border-left:3px #67c23a solid;
    }
    &.gray{
      border-left:3px #0CBADF solid;
    }
    &.danger{
      border-left:3px #f56c6c solid;
    }
    .mobile-tr{
      padding: 2px;
      .mobile-td{
        float: left;
        line-height: 30px;
      }
      .title{
        width: 30%;
      }
      .content{
        width: 70%;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
      }
    }
  }
}
</style>
