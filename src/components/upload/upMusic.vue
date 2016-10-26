<template>
	<div class="onesong-con">
		<label for="t_all">选择歌曲</label>
		<select v-on:change="getName">
			<option v-if="songMsg.length != 0" default="true">请选择歌曲</option>
			<option value="{{ song.song_id }}" size="{{ (song.song_size/1024/1024).toFixed(1) }}" v-for="song in songMsg">{{ song.song_name }}</option>
			<option size="10.00" v-if="songMsg.length == 0">没有上传歌曲</option>
		</select>
		<span style="float: right; margin-top:18px" >{{ size }}MB</span>
	</div>
</template>
<script>
	import url_conf from '../urlconf.js'
	export default {
		data () {
			return {
				props:['data'],
				size: 0,
				songMsgPromise: (async () => {
					let promise = new Promise((resolve, reject) => {
						let xhr = new XMLHttpRequest();
						xhr.open('GET', `${url_conf.SG_LT}?days=7&type=time&apply=yes`);
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
						let data1 = JSON.parse(data);
						return data1['list'];
					});
					
					tempP.map((it, index) => {
						if(it.played != 0){
							this.songMsg.push(it);
						}
					});
					return;
				})(),
				
				songMsg: [],
				choosed: []
			}

		},
		
		methods: {
			getName: function(e){
				let target = e.target;
				let name = target.value;
				if(name == "请选择歌曲") return
				let size;
				Array.from(target.children).map(function(op){
					if(op.value === name)
						size = parseFloat(op.getAttribute('size'));
				});
				this.size = size;
				if(!target.isCh){
					this.$dispatch('pushFile', {
						id: name, 
						size: size
					});
					target.isCh = true;
					//this.choosed.push(name)
				}else{
					this.$dispatch('pushFile', {
						id: name, 
						size: size
					}, true);
				}
			}
		}
	}
</script>