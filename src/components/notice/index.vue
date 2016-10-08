<template>
	<div class="no-con">
		<notiform></notiform>

		<notice></notice>
	</div>
</template>
<script>
	import notiform from './notiform.vue'
	import notice from './notice.vue'
	export default {
		components: {
			notice,
			notiform
		},
		events: {
			noticeChange: function(partern){
				console.log(2)
				this.$broadcast('addNoticeOnce', partern)
			}
		}
	}
</script>
<style>
	.no-con{
		float: right;
		width: 810px;
		min-height: 770px;
		background: #fff;
		/*overflow: hidden;*/
	}
</style>