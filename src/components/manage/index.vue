<template>
		<div class='man-con'>
			<form action="" v-on:change="dataChange">
				<select name="" id="time" v-model="time">
					<option value="最近一天">最近一天</option>
					<option value="最近三天">最近三天</option>
					<option value="最近一周">最近一周</option>
				</select>
				<select name="" id="day" v-model="type">
					<option value="时间">时间</option>
					<option value="热门">热门</option>
				</select>
				<select name="" id="isAccept" v-model="isAccept">
					<option value="已经采纳">已经采纳</option>
					<option value="未采纳">未采纳</option>
				</select>
			</form>
			<div id="mume-contain">
				<div class='man-title'>
					<span>歌手</span>
					<span>歌名</span>
					<span>对方姓名</span>
					<span>内容</span>
					<span>点歌人</span>
					<span>时间</span>
					<span>点赞数</span>
					<span>操作</span>
				</div>
				<input type="file" style="display:none" id="up">
				<mumes></mumes>	
			</div>
		<div>
</template>
<script>
	import mumes from './mumes.vue';
	export default{
		data(){
			return{
				time: "最近一天",
				type:	"时间",
				isAccept: "已经采纳"
			}
		},

		components: {
			mumes
		},

		methods:{
			dataChange: function(){
				let time = this.time,
						type = this.type,
						isAccept = this.isAccept
				
				this.$broadcast('dish', {
					time: time,
					type: type,
					isAccept: isAccept
				})
				
						
			},
		},

		events: {
			clickUp: function(data){
				let upBut = document.querySelector('#up');
				upBut.click();
				upBut.addEventListener('change', upMusic);
				function upMusic(e){
					upBut.removeEventListener('change', upMusic);
					let file = e.target.files[0];
					if(!/audio\/mp3/.test(file.type)){
						alert('文件格式错误，请传对应的MP3文件')
						return;
					}
					let formdata = new FormData();
					formdata.append('mis', file);
					let xhr = new XMLHttpRequest();
					let songMessage = {};
					Object.assign(songMessage, data);
					xhr.open('POST', `lalala.php?id=${songMessage.id}`);
					xhr.send(formdata);
				}
			}
		}
	}
</script>

<style>
	#mume-contain{
		width: 92%;
		margin: 0 auto;
	}
	.man-con{
		float: right;
		width: 810px;
		height: 770px;
		background: #fff;
	}
	.man-con select{
		width: 25%;
		height: 40px;
		margin:40px 4% 0;
		font-size: 14px;
		color: #fff;
		background: rgb(217,79,71);
	}
	.man-con div{
		width: 100%;
		height: 35px;
		display: flex;
		flex-wrap: wrap;
		text-align: center;
		line-height: 35px;
	}
	.man-con .man-title{
		margin-top: 20px;
	}
	.man-con .man-title span{
		color: #ccc;
	}
	.man-con span{
		border: 1px solid #ccc;
		border-radius: 5px;
		flex: 1;
		color: #333;
		overflow: hidden;
	}
	.is-pass{
		cursor: pointer;
		transition: all 0.5s ease-in-out;
	}
	.is-pass:hover{
		background: #ccc;
	}
</style>
