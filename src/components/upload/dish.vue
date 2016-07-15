<template>
	<div class="bar-info">
		<span>节目名称</span>
		<span>主播信息</span>
		<span>2015-07-05</span>
		<span>28.5MB</span>
		<span>
			<span class="sanjiao"></span>
		</span>
	</div>
</template>
<script>
	export default{
		data () {
			return {
				lalala:(() => {console.log(this.data);})()
			}
		},
		props: ['data'],
	}
</script>