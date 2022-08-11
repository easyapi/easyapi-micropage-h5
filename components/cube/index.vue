<template>
	<view class="cube-container">
		<view class="cube" :style="component.style">
			<view v-for="(item,index) in component.items" class="cube-img" :style="item.style">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["component"],
		data() {
			return {

			}
		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.cube-container {
		width: 100%;
		margin: 5px 0 5px 0;
	}

	.cube {
		display: grid;
		grid-row-gap: 4px;
		grid-column-gap: 4px;
	}

	.cube-img {
		background-size: 100% 100%;
	}
</style>
