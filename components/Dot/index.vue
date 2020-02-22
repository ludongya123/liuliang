<template>
	<view class="wrapper-dot flex-center">
		<text class="dot" :class="active==index?'active':''" v-for="index in len" :key="index"></text>
	</view>
</template>

<script>
	export default {
		props:   ['active','len'],
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.wrapper-dot {
		width: 100%;

		.dot {
			width: 14rpx;
			height: 14rpx;
			border-radius: 50%;
			background: rgba(0, 0, 0, 0.5);
			margin: 0 6rpx;

			&.active {
				width: 16rpx;
				height: 16rpx;
				background: #ffff00;
			}
		}
	}
</style>
