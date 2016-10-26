<template>
	<div v-for="(index, it) of songMsg">
		<span>{{ it.song_singer }}</span>
		<span>{{ it.song_name }}</span>
		<span>{{ it.receiver }}</span>
		<span>{{ it.message }}</span>
		<span>{{ it.name }}</span>
		<span>{{ it.created_at }}</span>
		<span>{{ it.likes }}</span>
		<span class="is-pass" songId="{{ index }}" v-on:click="clickUp" style="color:rgb(217,79,71)" v-if="it.played == 0">采纳</span>
		<span class="is-pass" songId="{{ index }}" style="color:rgb(217,79,71)" v-if="it.played == 1">已采纳</span>
	</div>
	<p id="no-music"  v-if="!songMsg.length">没有上传的新歌曲!</p>
</template>
<style>
	#no-music{
		margin: 200px auto;
		fontsize: 18px;
	}
</style>
<script>
	import url from '../urlconf.js'
	export default{
		data () { 
			return {
				songMsgPromise: (async (days=1, type="time", apply="yes") => {
					let promise = new Promise((resolve, reject) => {
						let xhr = new XMLHttpRequest();
						xhr.open('GET', `${url.SG_LT}?days=${days}&type=${type}&apply=${apply}`);
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
					this.songMsg = tempP;
					console.log(this.songMsg);
					return;
				})(),

				songMsg: []
			}
		},
		events: {
			dish: function(config){
				(async (days=config.days, type=config.type, apply=config.apply) => {
					let promise = new Promise((resolve, reject) => {
						let xhr = new XMLHttpRequest();
						xhr.open('GET', `${url.SG_LT}?days=${days}&type=${type}&apply=${apply}`);
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
					this.songMsg = tempP;
					console.log(this.songMsg);
					return;
				})()
			}
		},
		methods: {
			clickUp: function(e){
				let id = e.target.getAttribute('songId');
				let data = this.songMsg[id];
				this.$dispatch('clickUp', data);
			}
		}
	}
</script>