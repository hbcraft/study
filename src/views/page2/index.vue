<template>
  <div>
    <el-button @click="openEditor('add')">新增</el-button>
    <el-button @click="openEditor('edit')">修改</el-button>
    <el-button @click="openEditor('view')">查看</el-button>
    <Editor :type="editorType" :visible.sync="editorVisible" :fields="fields" />
  </div>
</template>

<script>
import Editor from './editor/index.vue'
export default {
  components: {
    Editor
  },
  data () {
    return {
      editorType: 'add',
      editorVisible: false,
      fields: [
        {
          label: '姓名',
          field: 'username',
          type: 'input',
          hidden: ['add', 'edit']
        },
        {
          label: '性别',
          field: 'sex',
          type: 'select',
          options: [
            {
              label: '男',
              value: 0
            },
            {
              label: '女',
              value: 1
            }
          ]
        }
      ]
    }
  },
  methods: {
    openEditor (type) {
      switch (type) {
        case 'add':
          this.editorType = 'add'
          break
        case 'edit':
          this.editorType = 'edit'
          break
        case 'view':
          this.editorType = 'view'
          break
      }
      this.editorVisible = true
    }
  }
}
</script>

<style>
</style>
