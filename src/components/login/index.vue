<template>
  <div class="login-con">
    <div class="form-con">
      <p>请先登录</p>
      <span>账号：</span>
      <input  v-model="username" type="text" >
      </br>
      <span>密码：</span>
      <input type="password" v-model="password">
      <button v-on:click="login">登录</button>
    </div>
  </div>
</template>
<style>
  .login-con{
    width: 810px;
    height: 770px;
    float: right;
    background: #fff;
  }
  .form-con{
    width: 450px;
    height: 300px;
    margin: 100px auto;
    border: 3px solid #d75651;
    border-radius: 10px; 
    color: #999;
  }
  .form-con p{
    margin: 20px 0; 
    text-align: center;
    font-size: 20px;
  }
  .form-con span{
    display: inline-block;
    margin: 40px 0 0 90px; 
  }
  .form-con input{
    width: 40%;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding-left: 5px;
  }
  .form-con button{
    display: block;
    width: 60px;
    height: 35px;
    border-radius: 5px;
    background: #d75651;
    margin: 30px auto;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
  }
</style>
<script>
import url from '../urlconf.js'
export default {
  data(){
    return{
      username : '',
      password : ''
    }
  },
  methods: {
    login: function(){
      let username = this.username,
          password = this.password,
          xhr = new XMLHttpRequest(),
          formdata = new FormData()
      formdata.append('username', username)
      formdata.append('password', password)
      xhr.open('POST', url.LGIN)
      xhr.send(formdata)
      xhr.onload = function(){
         this.success(xhr.responseText)
      }
    },
    success: function(data){
      let res = JSON.parse(data)
      if(!res.resolve) return alert("登录失败")
      this.$dispatch('login')
      alert("登陆成功")
    }
  }
}
</script>