<template>
	<view class="ad-container">
		<view v-if="component.items.length" :style="{padding:component.padding,borderRadius:component.borderRadius}">
			<view v-if="component.template ==='一行一个' || component.template ==='绘制热区'">
				<image :style="{borderRadius:component.borderRadius,height:loadFlag ? '1px' : imageHeight}"
					v-for="item in component.items" mode="widthFix" @load="bindload" />
			</view>

			<view v-if="component.template === '轮播海报'" class="ad-po">
				<swiper style="height:400rpx" class="ad-swiper" circular="true" indicator-color="#ddd"
					indicator-active-color="#333" indicator-dots autoplay>
					<swiper-item v-for="item in component.items">
						<image :style="{borderRadius:component.borderRadius,height:loadFlag?'1px':imageHeight}"
							:src="item.img" class="ad-swiper-item" mode="widthFix" lazy-load="true" @load="bindload">
						</image>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["component"],
		data() {
			return {
				loadFlag: "",
				imageHeight: ""
			}
		},
		methods: {
			bindload: function(res) {
				console.log(res)
				console.log(this.loadFlag)
				this.loadFlag = true,
					this.imageHeight = res.detail.height + "px"
			}
		},
		created() {
			this.component.padding = this.component.padding.replace(/px/g, "rpx")
			this.component.borderRadius = this.component.borderRadius.replace(/px/g, "rpx")
		}
	}
</script>

<style lang="scss" scoped>
	.ad-container {
		width: 100%;
	}

	.ad-sp,
	.ad-po,
	.ad-swiper,
	.ad-swiper-item {
		display: block;
		width: 100%;
	}

	.ad-swiper-item {
		width: 100%;
	}
</style>.ad-container {
width: 100%;
}

.ad-sp,
.ad-po,
.ad-swiper,
.ad-swiper-item {
display: block;
width: 100%;
}

.ad-swiper-item {
width: 100%;
}
