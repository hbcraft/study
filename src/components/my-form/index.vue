<template>
  <el-form :disabled="disabled" :label-width="labelWidth || '100px'">
    <!-- v-for 与 v-if 不可同时使用，所以使用不会渲染的template标签进行循环，再在el-form-item里面判断 -->
    <template v-for="field in fields">
      <!-- 如果field中存在hidden字段，并且hidden中包含type会返回true，会显示这个字段，所以使用感叹号反向，让他不显示 -->
      <el-form-item
        v-if="!(field.hidden && field.hidden.includes(type))"
        :key="field.field"
        :label="field.label"
      >
        <!-- v-model还没绑定，之后再说 -->
        <el-input v-if="field.type === 'input'" />
        <el-select
          v-if="field.type === 'select'"
          :value="0"
          style="width: 100%"
        >
          <el-option
            v-for="option in field.options"
            :key="option.label"
            :label="option.label"
            :value="option.value"
          />
        </el-select>
      </el-form-item>
    </template>
  </el-form>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean
    },
    type: {
      type: String
    },
    fields: {
      type: Array,
      required: true
    },
    labelWidth: {
      type: String
    }
  }
}
</script>

<style>
</style>
