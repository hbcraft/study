<template>
  <div>
    <el-button @click="changePage('2')">切换到page1-2</el-button>
  </div>
</template>

<script>
export default {
  name: 'page11',
  props: {
    currentPage: {
      type: String,
      required: true
    }
  },
  methods: {
    // 跳转页面
    changePage (target) {
      // 更新父组件传入的prop ‘currentPage’
      this.$emit('update:currentPage', target)
    }
  }
}
</script>

<style>
</style>
