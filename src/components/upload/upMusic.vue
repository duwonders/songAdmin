<template>
	<div class="onesong-con">
		<label for="t_all">选择歌曲</label>
		<select v-on:change="getName">
			<option value="俗人熟食" size="10.00">俗人熟食</option>
			<option value="寻人启事" size="10.50">寻人启事</option>
			<option value="惊天动地" size="11.00">惊天动地</option>
			<option value="恋爱循环" size="15.01">恋爱循环</option>
		</select>
		<p>文件大小 ：{{ size }}MB</p>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				size: 0,
			}
		},
		
		methods: {
			getName: function(e){
				let target = e.target;
				let name = target.value;
				let size;
				Array.from(target.children).map(function(op){
					if(op.value === name)
						size = parseFloat(op.getAttribute('size'));
				});
				this.size = size;
				if(!target.isCh){
					this.$dispatch('pushFile', {
						name: name, 
						size: size
					});
					target.isCh = true;
				}else{
					this.$dispatch('pushFile', {
						name: name, 
						size: size
					}, true);
				}
			}
		}
	}
</script>