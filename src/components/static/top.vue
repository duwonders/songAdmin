<template>
  <div class="top">
  	<p class="title">
  		<span>重邮点歌台</span>
  		<span class="top-sm">后台管理</span>
  	</p>
  </div>
</template>
<script>
export default {}
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
  input, button, select, textarea{
    border-style:none;
    border:none;
    outline:none;
  }
  li{
    list-style-type:none;
  }
  .top{
  	margin: 0 auto;
    width: 100%;
	  height: 56px;
	  background: rgb(217, 85, 77);
    position: relative;
  }
  .title{
    padding-left: 50px;
    width: 960px;
    margin: 0 auto;
  	font-size: 20px;
  	line-height: 56px;
    color: #fff;
  }
  .title .top-sm{
    padding-left: 10px;
    font-size: 16px;
    line-height: 16px;
    position: absolute;
    margin-left: 10px;
    top: 20px;
    height: 15px;
    display: inline-block;
    border-left: 3px solid #fff;
  }
</style>