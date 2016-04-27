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


export default {
  components: {
    top,
    leftbar
  }
}

</script>

<style>
</style>
