<template>
	<div class="up-con">
		<p class='up-title'>
			<span>整期节目</span>
			<span>包含歌曲</span>
		</p>
		<div class='up-left'>
			<div class="up-img-con">
				<input type="file" class="up-img" v-on:change="showpic">
			</div>
			<label for="t_name">节目名称</label>
			<input type="text" id="t_name">
			<label for="t_msg">主播信息</label>
			<input type="text" id="t_msg">
			<label for="t_time">播出时间</label>
			<input type="date" id="t_time">
			<p>文件大小 ：<span id="size">{{ sizeAll }}</span>MB</p>
			<button v-on:click="upload">上传</button>
		</div>
		<div class="up-right">
			<upMusic v-for="i in nums"></upMusic>
			<div class="onesong-con add" v-on:click="addMis" >
				<p>+ 添加</p>
			</div>
		</div>
	</div>
</template>

<script>
	import upmusic from "./upMusic"
 	import urlconf from "../urlconf.js"
	export default{
		data () {
			return {
				nums: [
					{ disable: [] },
				],
				musics: [],	//存放歌曲id的数组
				sizeAll: 0,
				pic: undefined
			}
		},
		methods : {
			showpic : function(e){
				let f = e.target.files[0];
				let reader = new FileReader();
				if(f.size > 250 * 1024)
					return alert("文件过大")
				if(/image/.test(f.type)){
					reader.readAsDataURL(f);
					this.pic = f;
				}else{
					alert('文件格式错误');
				}
				reader.onload = function(){
					let con = document.querySelector('.up-img-con');
					con.style.background = "url(" + reader.result + ")";
					con.style["background-size"] = "100% 100%";
				}
			},
			addMis : function(){
				this.nums.push({disable: []});
			},
			upload : function(){
				let tmp = []
				for (let i in this.musics){
					let str = tmp.join("")
					if(str.indexOf(this.musics[i].name) != -1){
						return alert("有重复的歌曲")
						break
					}
					tmp.push(this.musics[i].name)
				}
				//步骤一
				if(!this.pic || this.musics.length == 0){
					alert('文件不能为');
					return;
				}
				let file = new FormData();
				file.append('pic', this.pic);
				let name = document.querySelector('#t_name').value;
				let zhubo = document.querySelector('#t_msg').value;
				let time = document.querySelector('#t_time').value;
				let size = document.querySelector('#size').innerHTML;
				let num = this.musics.length;
				let musics = JSON.stringify(this.musics);
				let XHR = new XMLHttpRequest();
				let program = {
					name: name,
					author: zhubo,
					time: time,
					allSize: size,
					musics: musics
				}
				file.append('program', JSON.stringify(program))
				XHR.open('post', `${urlconf.POG_UP}?&num=${num}`, true);
				XHR.send(file);
				XHR.onload = (data) => {
					console.log(data.response);
				}
			}
		},

		events : {
			pushFile : function(music, isChange = false){
				if(isChange){
					let preSize = this.musics[this.musics.length - 1].size;
					this.sizeAll -= preSize;
					this.musics.pop();
				}
				this.musics.push(music);
				this.sizeAll += music.size;
			}
		},

		components: {
			upmusic
		}
	}
</script>

<style>
	#music-file-con{
		display: inline-block; 
		width:20px; 
		height: 17px; 
		border-radius:0; 
		border: none; 
		border-left: 2px solid #ccc; 
		float: right; 
		text-align:center; 
		color: #ccc;
	}
	.onesong-con input{
		opacity: 0;
		width: 20px;
		float: right;
	}
	.onesong-con div{
		margin-left: 20px;
		border: 2px solid #ccc;
		border-radius: 5px;
		width: 190px;
		display: inline-block;
	}
	.up-left{
		width: 50%;
		float: left;
		height: 100%;
	}
	.up-con{
		height: 350px;
		width: 90%;
		margin: 35px auto;
	}
	.up-title span{
		font-size: 20px;
		color: rgb(128, 128, 128);
		display: inline-block;
		margin-right: 278px;
	}
	.up-left .up-img-con{
		transition: all 0.6s ease-in-out;
		margin: 15px 0;
		width: 80%;
		background: url('../../assets/up_img.png') no-repeat;
		background-position: center;
		border-radius: 10px;
	}
	.up-img-con:hover{
		border-radius: 10px;
		background-color: rgb(0, 191, 255);
	}
	.up-left .up-img{
		cursor: pointer;
		display: inline-block;
		width: 100%;
		height: 140px;
		opacity: 0;
	}
	.up-con label{
		color: rgb(128, 128, 128);
	}
	.up-left input{
		padding-left: 5px;
		width: 170px;
		height: 20px;
		margin: 0 90px 0 20px;
		border: 2px solid rgb(200, 200, 200);
		border-radius: 5px;
		margin-bottom: 15px;
	}
	.up-con select{
		margin: 14px 9px 0 20px;
		width: 179px;
		height: 26px;
		border: 2px solid rgb(200, 200, 200);
		border-radius: 5px;
		background-color: #fff;
		font-size: 14px; 
		text-indent: 10px;
	}
	.up-con p{
		margin-top: 10px;
		margin-bottom: 10px;
		font-size: 13px;
		color: rgb(174, 174, 174);
	}
	.up-left button{
		width: 90px;
		height: 30px;
		border-radius: 5px;
		background-color: rgb(217, 79, 71);
		cursor: pointer;
		margin-left: 175px;
		color: #fff;
		font-size: 16px;
	}
	.up-left button:hover{
		transition: all 0.6s ease-in-out;
		background-color: rgb(109, 140, 350);
	}
	.up-right{
		width: 50%;
		float: right;
		height: 100%;
		overflow: scroll;
	}
	.onesong-con{
		width: 89%;
		height: 50px;
		margin: 10px 0;
		padding: 10px;
		border: 1px solid rgb(200, 200, 200);
		border-radius: 5px;
	}
	.add{
		cursor: pointer;
		background-image: url();
		background-color: rgb(248, 248, 248);
		line-height: 
	}
	.add p{
		margin: 0;
		font-size: 20px;
		color: rgb(217, 79, 71);
		text-align: center;
		line-height: 50px;
	}
	.add:hover{
		transition: all 0.6s ease-in-out;
		background-color: rgb(0, 191, 255);
	}
</style>