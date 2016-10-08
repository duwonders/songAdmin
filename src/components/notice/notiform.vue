<template>
	<div class="notiform">
		<p class='no-top'>发表新公告：</p>
		<label for="no-title">公告标题</label>
		<input type="text" id='no-title' v-model="title">
		<label for="no-context">公告内容</label>
		<textarea id='no-context' placeholder="限200字" v-model="content">{{ content }}</textarea>
		<button v-on:click="addNotice">提交</button>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				title: "",
				content: ""
			}
		},
		methods: {
			addNotice: function(){
				let title = this.title,
						content = this.content
				let xhr = new XMLHttpRequest()
				xhr.open('POST', './')
				xhr.send(`title=${title}&content=${content}`)
				xhr.onload = (response) => {
					if(!response.status == 200)
						return alert("添加失败")
					console.log(1)
					this.$dispatch('noticeChange', {
						title: title,
						content: content
					})
				} 
			}
		}
	}
</script>
<style>
	.notiform{
		width: 80%;
		min-width: 80%;
		height: 45%;
		min-height: 45%;
		/*background: #ccc;*/
		margin: 40px auto 0;
		margin-bottom: 20px; 
	}
	.no-top{
		height: 40px;
		border: 1px solid #ccc;
		border-radius: 5px;
		font-size: 18px;
		line-height: 40px;
		text-indent: 1em;
		background: rgb(250,250,250)
	}
	.notiform label{
		display: block;
		text-indent: 1em;
		line-height: 25px;
		margin: 10px;
	}
	#no-title{
		width: 200px;
		height: 30px;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding-left: 10px; 
		margin-left: 50px; 
	}
	#no-context{
		display: block;
		margin: 0 auto; 
		width: 80%;
		height: 100px;
		border-radius: 10px;
		border: 2px solid #ccc;
		font-size: 14px;
		text-indent: 2em;
		padding: 10px;
	}
	.notiform button{
		margin-top: -30px;
		cursor: pointer;
		width: 50px;
		height: 30px;
		border-radius: 5px;
		float: right;
		transition: all 0.5s ease-in-out;
	}
	.notiform button:hover{
		background: rgb(217,79,71);
	}
</style>
