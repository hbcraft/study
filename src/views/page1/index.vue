<template>
  <div>
    <Page11 v-if="currentPage === '1'" :currentPage.sync="currentPage" />
    <Page12 v-if="currentPage === '2'" :currentPage.sync="currentPage" />
  </div>
</template>

<script>
import Page11 from './page1-1/index.vue'
import Page12 from './page1-2/index.vue'
export default {
  name: 'page1',
  components: {
    Page11,
    Page12
  },
  data () {
    return {
      currentPage: '1'
    }
  }
}
</script>

<style>
</style>
