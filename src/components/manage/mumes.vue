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
</template>
<script>
	export default{
		data () { 
			return {
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
					this.songMsg = tempP;
					console.log(this.songMsg);
					return;
				})(),

				songMsg: []
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