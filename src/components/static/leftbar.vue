<template>
  <div class="leftbar">
    <ul v-on:click="loop_bar">
      <li><a href="#1" value="25px" id="dsa"><img src="../../assets/music.png" height="18" width="16">歌曲管理</a></li>
      <li><a href="#2" value="75px"><img src="../../assets/sound.png" height="15" width="16">公告管理</a></li>
      <li><a href="#3" value="125px"><img src="../../assets/mon.png" height="17" width="17">数据分析</a></li>
      <li><a href="#4" value="175px"><img src="../../assets/up.png" height="17" width="17">节目上传</a></li>
      <li><a href="#5" value="225px"><img src="../../assets/set.png" height="14" width="14">违规设置</a></li>
    </ul>
    <span style="top: {{ top }}"></span>
</div>
</template>
<script>
  export default {
    data () {
      return {
        top: '25px'
      }
    },
    methods: {
      loop_bar: function (event) {
        this.top = event.target.getAttribute('value')
      }
    }
  }
</script>
<style>
	.leftbar{
		float: left;
		width: 150px;
		height: 770px;
		background: rgb(40, 45, 48);
		overflow: hidden;
		position: relative;
	}
	.leftbar ul{
		margin-top: 25px;
		overflow: hidden;
	}
	.leftbar ul li{
		height: 50px;
		font-size: 17px;
		text-align: center;
	}
	.leftbar ul li a{
		line-height: 50px;
		display: inline-block;
		width: 100%;
		height: 100%;
		color: #fff;
	}
	.leftbar ul li a:hover{
		background: #000;
	}
	.leftbar ul li a img{
		display: inline-block;
		margin-right: 10px;
		margin-left: -10px; 
	}
	.leftbar span{
		display: inline-block;
		width: 5px;
		height: 50px;
		background: rgb(217,79,71);
		position: absolute;
		right: 0;
		transition: all 0.5s ease-in-out;
	}
</style>