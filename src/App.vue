<template>
  <top></top>
  <div id="container">
    <leftbar></leftbar>
    <router-view></router-view> 
  </div>
</template>

<script>
import top from './components/static/top.vue'
import leftbar from './components/static/leftbar.vue'
import upload from './components/upload/index.vue'
import manage from './components/manage/index.vue'

export default {
  components: {
    upload,
    top,
    leftbar,
    manage
  }
}

</script>

<style>
</style>
