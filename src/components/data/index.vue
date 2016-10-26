<template>
		<div class='data-con'>
			<form action="" v-on:change="dataChange">
				<select name="" id="" v-model="days">
					<option value="最近一天">最近一天</option>
					<option value="最近三天">最近三天</option>
					<option value="最近一周">最近一周</option>
					<option value="最近十五天">最近十五天</option>
					<option value="最近一个月">最近一个月</option>
				</select>
				<select name="" id="" v-model="type">
					<option value="点歌次数">点歌次数</option>
					<option value="累计点赞数">累计点赞数</option>
					<option value="综合热门度">综合热门度</option>
				</select>
			</form>
			<div class='data-title'>
				<span>序号</span>
				<span>歌名</span>
				<span>歌手</span>
				<span>点赞数</span>
				<span>累计点赞数</span>
				<span>综合热门度</span>
			</div>
			<div v-for="(index, it) of songMsg">
				<span>{{ it.song_id }}</span>
				<span>{{ it.song_name }}</span>
				<span>{{ it.song_singer }}</span>
				<span>{{ it.likes }}</span>
				<span>{{ it.likes }}</span>
				<span>{{ it.likes }}</span>
			</div>
		</div>
</template>
<script>
	import url from "../urlconf.js"
	export default{
		data(){
			return {
				songMsgPromise: (async () => {
					let promise = new Promise((resolve, reject) => {
						let xhr = new XMLHttpRequest();
						xhr.open('GET', url.SG_LT);
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
				songMsg: [],
				days: "最近一天",
				type: "点歌次数"
			}
		},
		methods: {
			dataChange: function(){
				(async () => {
					let promise = new Promise((resolve, reject) => {
						let xhr = new XMLHttpRequest(),
						time = this.time,
						type = this.type
						
						xhr.open('GET', `${url.SG_LT}&time=${time}&type=${type}`);
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
		}
	}
</script>
<style>
	.data-con{
		float: right;
		width: 810px;
		height: 770px;
		background: #fff;
	}
	.data-con select{
		width: 40%;
		height: 40px;
		margin:40px 4% 0;
		font-size: 14px;
		color: #fff;
		background: rgb(217,79,71);
	}
	.data-con div{
		width: 100%;
		height: 35px;
		display: flex;
		flex-wrap: wrap;
		text-align: center;
		line-height: 35px;
	}
	.data-con .data-title{
		margin-top: 20px;
	}
	.data-con .data-title span{
		color: #000;
	}
	.data-con span{
		border: 1px solid #ccc;
		border-radius: 5px;
		flex: 1;
		color: #ccc;
		overflow: hidden;
	}
</style>
