<template>
		<div class='man-con'>
			<form action="">
				<select name="" id="">
					<option value="">最近一天</option>
					<option value="">最近三天</option>
					<option value="">最近一周</option>
				</select>
				<select name="" id="">
					<option value="">时间</option>
					<option value="">热门</option>
				</select>
				<select name="" id="">
					<option value="">已经采纳</option>
					<option value="">未采纳</option>
				</select>
			</form>
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
			<div>
				<span>dsadsa</span>
				<span>dsadsa</span>
				<span>dsa</span>
				<span>内dsadsa容</span>
				<span>点dsadsa歌人</span>
				<span>时间</span>
				<span>点赞ewqewq数</span>
				<span class="is-pass">采纳</span>
			</div>
			<div>
				<span>dsadsa</span>
				<span>dsadsa</span>
				<span>dsa</span>
				<span>内dsadsa容</span>
				<span>点dsadsa歌人</span>
				<span>时间</span>
				<span>点赞ewqewq数</span>
				<span class="is-pass">采纳</span>
			</div>
			<div>
				<span>dsadsa</span>
				<span>dsadsa</span>
				<span>dsa</span>
				<span>内dsadsa容</span>
				<span>点dsadsa歌人</span>
				<span>时间</span>
				<span>点赞ewqewq数</span>
				<span class="is-pass">采纳</span>
			</div>
			<div>
				<span>dsadsa</span>
				<span>dsadsa</span>
				<span>dsa</span>
				<span>内dsadsa容</span>
				<span>点dsadsa歌人</span>
				<span>时间</span>
				<span>点赞ewqewq数</span>
				<span class="is-pass">采纳</span>
			</div>
		</div>
</template>

<style>
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
		color: #000;
	}
	.man-con span{
		border: 1px solid #ccc;
		border-radius: 5px;
		flex: 1;
		color: #ccc;
		overflow: hidden;
	}
	.is-pass{
		cursor: pointer;
		transition: all 0.5s ease-in-out;
	}
	.is-pass:hover{
		background: rgb(217,79,71);
	}
</style>