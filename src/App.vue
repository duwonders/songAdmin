<template>
  <top></top>
  <div id="container">
    <leftbar></leftbar>
    <upload></upload>
  </div>
</template>

<script>
import top from './components/static/top.vue'
import leftbar from './components/static/leftbar.vue'
import upload from './components/upload/index.vue'
export default {
  components: {
    upload,
    top,
    leftbar
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
</style>
