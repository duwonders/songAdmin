<template>
	<div class="rule">
		<div class="main-con">
			<div class="add-rule">
				<p class='add-p'>违规字设置</p>
				<div class='add-min'>
					<input type="text" id="rule-add">
					<button>设置</button>
					<p>已设置的违规字：</p>
					<div class="span-con">
						<span>dsadsadsa</span>
						<span>dsadsadsa</span>
						<span>dsadsadsa</span>
						<span>dsadsadsa</span>
						<span>dsadsadsa</span>
						<span>dsadsadsa</span>
						<span>dsadsadsa</span>
						<span>dsadsadsa</span>
						<span>dsadsadsa</span>
						<span>dsadsadsa</span>
						<span>dsadsadsa</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	.rule{
		float: right;
		width: 810px;
		height: 770px;
		background: #fff;
	}
	.main-con{
		width: 80%;
		min-width: 80%;
		height: 60%;
		min-height: 60%;
		margin: 50px auto;
	}
	.add-p{
		color: #ccc;
		text-indent: 2em;
		line-height: 30px;
		height: 30px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}
	.add-rule input{
		display: inline-block;
		padding-left: 10px;
		height: 20px;
		border: 1px solid #000;
		border-radius: 5px;
	}
	.add-rule button{
		cursor: pointer;
		width: 50px;
		height: 20px;
		display: inline-block;
		border-radius: 2px;
		background: #ccc
	}
	.add-rule button:hover{
		transition: 0.5s ease-in;
		background: orange;
	}
	.add-min{
		padding: 30px;
		border-radius: 5px;
		border: 1px solid #eee;
	}
	.add-min p {
		margin: 20px 0;
	}
	.span-con span{
		font-size: 16px;
		color: red;
		display: inline-block;
		margin: 0 20px;
	}
</style>