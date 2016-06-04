<template>
	<div v-for="it of songMsg">
		<span>{{ it.singer }}</span>
		<span>{{ it.songName }}</span>
		<span>{{ it.toWho }}</span>
		<span>{{ it.contest }}</span>
		<span>{{ it.pointPerson }}</span>
		<span>{{ it.time }}</span>
		<span>{{ it.vote }}</span>
		<span class="is-pass" v-on:click="clickUp">采纳</span>
	</div>
</template>
<script>
	export default{
		data () { 
			return {
				songMsg: [
					{
						singer: "陈小春",
						songName: "独家记忆",
						toWho: '陈馨怡',
						contest: 'good night myAngle',
						pointPerson: 'duwonders',
						time: '1995.1.1',
						vote: '10000'
					},
				],
			}
		},
		methods: {
			clickUp: function(){
				this.$dispatch('clickUp');
			}
		}
	}
</script>