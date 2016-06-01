<template>
	<div>
		<span>dsadsa</span>
		<span>dsadsa</span>
		<span>dsa</span>
		<span>内dsadsa容</span>
		<span>点dsadsa歌人</span>
		<span>时间</span>
		<span>点赞ewqewq数</span>
		<span class="is-pass" v-on:click="clickUp">采纳</span>
	</div>
</template>
<script>
	export default{
		methods: {
			clickUp: function(){
				this.$dispatch('clickUp');
			}
		}
	}
</script>