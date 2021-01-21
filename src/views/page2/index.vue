<template>
  <div>
    <el-button @click="openEditor('add')">新增</el-button>
    <el-button @click="openEditor('edit')">修改</el-button>
    <el-button @click="openEditor('view')">查看</el-button>
    <Editor
      :type="editorType"
      :visible.sync="editorVisible"
      :fields="fields"
      @confirm="confirm"
    />
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
          dataType: 'string',
          required: true,
          validateTrigger: 'blur',
          // rules: [
          //   {required: true, message: '请输入姓名', trigger: 'blur'}
          // ],
          hidden: ['view']
        },
        {
          label: '性别',
          field: 'sex',
          type: 'select',
          required: true,
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
        },
        {
          label: '年龄',
          field: 'age',
          type: 'input',
          dataType: 'number'
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
    },
    confirm (formData) {
      console.log(formData)
      // 请求接口提交数据 等等
      this.editorVisible = false
    }
  }
}
</script>

<style>
</style>
