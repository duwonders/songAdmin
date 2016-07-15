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
		<dish v-for="dishes in dishes" :data="{{ dishes }}"></dish>
	</div>
</template>
<script>
	import dish from './dish.vue';
	export default{
		data () {
			return {
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

				dishes: []
			}
		},


		methods : {
			showMus : function(e){
				let target = e.target.parentNode.parentNode;
				if(target.className === 'bar-info'){
					if(e.target.className === 'sanjiao'){		//进行往期节目的渲染
						e.target.className = 'fansanjiao';
						let div = document.createElement('div');
						div.className = "bar-info";
						div.mus = true;
						div.innerHTML = 
						"<span>歌曲名称: 相依为命</span>" +
						"<span>演唱者: 陈小春</span>" +
						"<span>文件大小: 25MB</span>"
					  target.parentNode.insertBefore(div, target.nextSibling);
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
		components: {
			dish,
		}
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
