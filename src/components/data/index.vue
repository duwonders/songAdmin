<template>
		<div class='data-con'>
			<form action="">
				<select name="" id="">
					<option value="">最近一天</option>
					<option value="">最近三天</option>
					<option value="">最近一周</option>
					<option value="">最近十五天</option>
					<option value="">最近一个月</option>
				</select>
				<select name="" id="">
					<option value="">点歌次数</option>
					<option value="">累计点赞数</option>
					<option value="">综合热门度</option>
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
			<div>
				<span>dsadsa</span>
				<span>dsadsa</span>
				<span>dsa</span>
				<span>内dsadsa容</span>
				<span>点dsadsa歌人</span>
				<span>呵呵</span>
			</div>
			<div>
				<span>dsadsa</span>
				<span>dsadsa</span>
				<span>dsa</span>
				<span>内dsadsa容</span>
				<span>点dsadsa歌人</span>
				<span>呵呵</span>
			</div>
			<div>
				<span>dsadsa</span>
				<span>dsadsa</span>
				<span>dsa</span>
				<span>内dsadsa容</span>
				<span>点dsadsa歌人</span>
				<span>呵呵</span>
			</div>
			<div>
				<span>dsadsa</span>
				<span>dsadsa</span>
				<span>dsa</span>
				<span>内dsadsa容</span>
				<span>点dsadsa歌人</span>
				<span>呵呵</span>
			</div>
		</div>
</template>

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
