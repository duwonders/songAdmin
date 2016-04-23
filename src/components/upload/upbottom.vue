<template>
	<div class="bottom-con">
		<p>往期节目</p>
		<div class="bar-title">
			<span>节目名称</span>
			<span>主播信息</span>
			<span>播出时间</span>
			<span>文件大小</span>
			<span>所含歌曲</span>
		</div>
		<div class="bar-info">
			<span>节目名称</span>
			<span>主播信息</span>
			<span>2015-07-05</span>
			<span>28.5MB</span>
			<span>
				<span class="sanjiao"></span>
			</span>
		</div>
		<div class="bar-info">
			<span>节目名称</span>
			<span>主播信息</span>
			<span>2015-07-05</span>
			<span>28.5MB</span>
			<span>
				<span class="sanjiao"></span>
			</span>
		</div>
		<div class="bar-info">
			<span>节目名称</span>
			<span>主播信息</span>
			<span>2015-07-05</span>
			<span>28.5MB</span>
			<span>
				<span class="sanjiao"></span>
			</span>
		</div>
		<div class="bar-info">
			<span>节目名称</span>
			<span>主播信息</span>
			<span>2015-07-05</span>
			<span>28.5MB</span>
			<span>
				<span class="sanjiao"></span>
			</span>
		</div>
		<div class="bar-info">
			<span>节目名称</span>
			<span>主播信息</span>
			<span>2015-07-05</span>
			<span>28.5MB</span>
			<span>
				<span class="sanjiao"></span>
			</span>
		</div>
		<div class="bar-info">
			<span>节目名称</span>
			<span>主播信息</span>
			<span>2015-07-05</span>
			<span>28.5MB</span>
			<span>
				<span class="sanjiao"></span>
			</span>
		</div>
		<div class="bar-info">
			<span>节目名称</span>
			<span>主播信息</span>
			<span>2015-07-05</span>
			<span>28.5MB</span>
			<span>
				<span class="sanjiao"></span>
			</span>
		</div>
		<div class="bar-info">
			<span>节目名称</span>
			<span>主播信息</span>
			<span>2015-07-05</span>
			<span>28.5MB</span>
			<span>
				<span class="sanjiao"></span>
			</span>
		</div>
	</div>
</template>
<style>
	.bottom-con{
		width: 100%;
		height: 50%;
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
</style>
