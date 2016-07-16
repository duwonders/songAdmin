<template>
	<div class="bottom-con" v-on:click="showMus">
		<p>往期节目</p>
		<div class="bar-title">
			<span>节目名称</span>
			<span>主播信息</span>
			<span>播出时间</span>
			<span>文件大小</span>
			<span>所含歌曲</span>
		</div>
		<div class="bar-info" v-for="dish in dishes" albumId="{{ dish.album_id }}">
			<span>{{ dish.album_name }}</span>
			<span>{{ dish.album_author }}</span>
			<span>{{ dish.published_at }}</span>
			<span>{{ dish.album_size }} </span>
			<span>
				<span class="sanjiao"></span>
			</span>
		</div>
</template>
<script>
	export default{
		data () {
			return {
				dishes: [],
				dishPromise: (async () => {
					let promise = new Promise((resolve, reject) => {
						let xhr = new XMLHttpRequest();
						xhr.open('GET', 'http://localhost:8000/program/list');
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
					this.dishes = tempP;
					return;
				})(),
			}
		},


		methods : {
			showMus : function(e){
				let target = e.target.parentNode.parentNode;
				// console.log(this.dishes)
				if(target.className === 'bar-info'){
					if(e.target.className === 'sanjiao'){		//进行往期节目的渲染
						e.target.className = 'fansanjiao';
						let ambId = target.getAttribute('albumid');
						//循环创建歌曲列表 我是傻逼
						this.dishes.map((iterm, index)=>{
							if(iterm.album_id != ambId)
								return;
							console.log(iterm.album_id);
							iterm.sheets_meta.map((it, ind) => {
								let div = document.createElement('div');
								div.className = "bar-info";
								div.mus = true;
								div.innerHTML = 
								"<span>歌曲名称: "+ it.song_name +"</span>" +
								"<span>演唱者: " + it.song_singer + "</span>" +
								"<span>点歌人: " + it.name + "</span>"
							  target.parentNode.insertBefore(div, target.nextSibling);
							})
						})
					}else{
						e.target.className = 'sanjiao';
						fordel(target);
					}
				}
				function fordel(node){
					if(node.nextSibling.mus && node.nextSibling){
						fordel(node.nextSibling);
						node.parentNode.removeChild(node.nextSibling);
					}else{
						return;
					}
				}
			}
		},
	}
</script>
<style>
	.bottom-con{
		width: 100%;
		height: 50%;
		overflow: scroll;
	}
	.bottom-con p{
		margin-left: 40px;
		font-size: 20px;	
	}
	.bottom-con div{
		height: 30px;
		display: flex;
		flex-wrap: wrap;
		line-height: 30px;
		text-align: stretch;
	}
	.bottom-con span{
		flex: 1;
		text-align: center;
		line-height: 30px;
		overflow: hidden;
	}

	.bar-title{
		margin-top: 10px;
		background-color: rgb(237, 237, 237);
	}
	.bar-info{
		background-color: #fff;
		border: 1px solid rgb(237, 237, 237);
		font-size: 14px;
		color: rgb(200,200,200);
	}
	.bar-info .sanjiao{
		cursor: pointer;
		width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 10px solid rgb(217, 79, 71);
    display: inline-block;
	}
	.bar-info .fansanjiao{
		cursor: pointer;
		width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 10px solid rgb(217, 79, 71);
    display: inline-block;
	}
</style>
