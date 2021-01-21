<template>
  <div>
    <Page11 v-if="currentPage === '1'" :currentPage.sync="currentPage" />
    <Page12 v-if="currentPage === '2'" :currentPage.sync="currentPage" />
  </div>
</template>

<script>
import Page11 from './page1-1/index.vue'
import Page12 from './page1-2/index.vue'
import { getIpInfo } from '@/apis/utils/ip'
export default {
  name: 'page1',
  components: {
    Page11,
    Page12
  },
  data () {
    return {
      currentPage: '1',
      ipinfo: ''
    }
  },
  mounted () {
    getIpInfo('58.62.166.187').then((res) => {
      if (res.code === '200') {
        this.ipinfo = res.data
        this.$message.success('成功')
      } else {
        this.$message.error('出错了' + res.data.ip)
      }
    })
  }
}
</script>

<style>
</style>
