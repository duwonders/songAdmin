<template>
	<div class="onesong-con">
		<label for="music-file">选择歌曲</label>
		<div style="position:relative">
			<span style="position:absolute; margin-left: 4px; color: #900212; overflow: hidden; font-size:10px; margin-top:4px; width: 150px; height: 15px;overflow:hidden; line-height: 15px"></span>
			<div id="music-file-con">...</div>
			<input id="music-file" type="file" v-on:change="getFile">
		</div>
		<p>文件大小 ：0MB</p>
		<label for="t_all">近期播放</label>
		<select name="" id="">
			<option value ="volvo">俗人熟食</option>
			<option value ="saab">寻人启事</option>
			<option value="opel">惊天动地</option>
			<option value="audi">恋爱循环</option>
		</select>
	</div>
</template>
<script>
	export default {
		methods: {
			getFile: function(e){
				let f = e.target.files[0];
				if(!/mp3/.test(f.type)){
					alert("文件格式错误");
					return;
				}else{
					e.target.parentNode.children[0].innerHTML = f.name;
					e.target.parentNode.nextElementSibling.innerHTML = "文件大小 ： " + (f.size / 1024 / 1024).toFixed(2) + 'MB';
					this.$dispatch('pushFile', f);
				}
			}
		}
	}
</script>