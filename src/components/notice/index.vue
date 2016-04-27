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
		}
	}
</script>
<style>
	.no-con{
		float: right;
		width: 810px;
		background: #fff;
		/*overflow: hidden;*/
	}
</style>