<template>
	<div class="onesong-con">
		<label for="music-file">选择歌曲</label>
		<div>
			<span style="display:inline-block; margin-left: 6px; color: #900212"></span>
			<div id="music-file-con">...</div>
			<input id="music-file" type="file" v-on:change="getFile">
		</div>
		<p>文件大小 ：25.4MB</p>
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
				}
			}
		}
	}
</script>