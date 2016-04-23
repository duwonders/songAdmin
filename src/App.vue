<template>
  <top></top>
  <div id="container">
    <leftbar></leftbar>
    <upload></upload>
    <manage><manage>  
  </div>
</template>

<script>
import top from './components/static/top.vue'
import leftbar from './components/static/leftbar.vue'
import upload from './components/upload/index.vue'
import manage from './components/manage/index.vue'
export default {
  data(){
    return{
      current: '#1',
    }
  },
  methods: {
    hashchange: function(){
      this.data.current = window.location.hash;
      alert('lalal');
    }
  },
  components: {
    upload,
    top,
    leftbar,
    manage
  }
}

</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  html{
    width: 100%;
    background: rgb(238,238,238);
  }
  #container{
    margin: auto;
    width: 960px;
    overflow: hidden;
  }
  input, button, select{
    border-style:none;
    border:none;
    outline:none;
  }
  li{
    list-style-type:none;
  }
</style>
