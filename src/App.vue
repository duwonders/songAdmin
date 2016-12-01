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
  data(){
    return {
      is_login: false
    }
  },
  events: {
    login: function(){
      this.login = true
    },
    cheackLog: function(){
      if(!this.login){
        alert("请先登录")
        window.location.href = './'
      }
    }
  },
  components: {
    top,
    leftbar
  }
}

</script>

<style>
</style>
