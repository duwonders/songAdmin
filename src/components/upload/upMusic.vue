<template>
	<div class="onesong-con">
		<label for="t_all">选择歌曲</label>
		<select v-on:change="getName">
			<option value="{{ song.song_id }}" size="10.00" v-for="song in songMsg">{{ song.name }}</option>
			<option size="10.00" v-if="songMsg.length == 0">没有上传歌曲</option>
		</select>
		<p>文件大小 ：{{ size }}MB</p>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				size: 0,
				songMsgPromise: (async () => {
					let promise = new Promise((resolve, reject) => {
						let xhr = new XMLHttpRequest();
						xhr.open('GET', 'http://localhost:8000/song/list');
						xhr.send();
						xhr.onload = function(){
							if(xhr.readyState == 4 && xhr.status == 200){
								resolve(xhr.responseText);
							}else{
								alert("出现异常");
							}
						}
					});
					let tempP = await promise.then(data => {
						let data1 = JSON.parse(data)['list'];
						return data1;
					});
					tempP.map((it, index) => {
						if(it.played != 0){
							this.songMsg.push(it);
						}
					});
					console.log(this.songMsg.length);
					return;
				})(),

				songMsg: []
			}

		},
		
		methods: {
			getName: function(e){
				let target = e.target;
				let name = target.value;
				let size;
				Array.from(target.children).map(function(op){
					if(op.value === name)
						size = parseFloat(op.getAttribute('size'));
				});
				this.size = size;
				if(!target.isCh){
					this.$dispatch('pushFile', {
						name: name, 
						size: size
					});
					target.isCh = true;
				}else{
					this.$dispatch('pushFile', {
						name: name, 
						size: size
					}, true);
				}
			}
		}
	}
</script>