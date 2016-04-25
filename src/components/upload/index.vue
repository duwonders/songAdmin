<template>
	<div class="upload">
		<uptop></uptop>
		<upbottom></upbottom>
	</div>
	<!-- </div> -->
</template>
<script>
import uptop from './uptop.vue'
import upbottom from './upbottom.vue'
export default {
	components: {
		uptop,
		upbottom
	}
}
</script>
<style>
	.upload{
		float: right;
		width: 810px;
		height: 770px;
		background: #fff;
	}
</style>
