<template>
  <el-dialog :title="title" :visible="visible" @close="closeEditor">
    <my-form :disabled="disabled" :type="type" :fields="fields" />
  </el-dialog>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'add',
      validator (v) {
        return ['add', 'edit', 'view'].includes(v)
      }
    },
    visible: {
      type: Boolean,
      required: true
    },
    propData: {
      type: Object
    },
    fields: {
      type: Array,
      required: true
    }
  },
  computed: {
    title () {
      switch (this.type) {
        case 'add':
          return '新增xxxx'
        case 'edit':
          return '修改xxxx'
        case 'view':
          return '查看xxxx'
        default:
          return '新增xxxx'
      }
    },
    disabled () {
      return this.type === 'view'
    }
  },
  methods: {
    closeEditor () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style>
</style>
