<template>
	<div class="notice">
		<p class="no-top">历史公告</p>
		<div class="no-context" v-for="(index, item) in notice">
			<p class="p-title">{{ item.title }}</p>
			<p>{{ item.content }}</p>
		</div>
	</div>
</template>
<script>
	export default{
		data () {
			return {
				notice: [],
				noticePromise: (() => {
					return new Promise((rs, rj)=>{
						let xhr = new XMLHttpRequest();
						xhr.open('GET', './')
						xhr.send()
						xhr.onload = (response) => {
							// this.notice = response	//公告对象
							rs()
						}
					})
				})()
			}
		},
		events: {
			addNoticeOnce: function(partern){
				console.log(3)
				this.notice.push(partern)
			}
		}
	}
</script>
<style>
	.notice{
		width: 80%;
		min-width: 80%;
		height: 55%;
		min-height: 55%;
		margin:auto;
		border-bottom: 1px solid #ccc; 
	}
	.no-context{
		height: 150px;
		border: 1px solid #ccc;
		border-radius: 5px;
		overflow: hidden;
		padding: 10px;
	}
	.no-context .p-title{
		line-height: 40px;
		font-size: 18px;
		margin-left: 20px;
	}
	.np-context p{
		font-size: 15px;
		text-indent: 2em;
	}
</style>