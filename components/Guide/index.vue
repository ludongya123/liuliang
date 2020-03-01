<template> 
		<view class="guide" v-if="isShowGuide"  @click="hideGuide">
			<view class="index" v-show="page=='index'">
				<view style="padding:15rpx 0 0 25rpx;">
					<image src="/static/guide/1.png" style="width: 420rpx;height: 42rpx;padding:5rpx;background:#fff;border-radius: 5rpx;"></image>
				</view>
				<view style="text-align:center;margin:15rpx 0">
					<image src="/static/guide/2.png" style="width: 90rpx;height: 154rpx;" mode="aspectFill"></image>
				</view>
				<view style="text-align: center;">
					<image src="/static/guide/3.png" style="width: 463rpx;height: 143rpx;" mode="aspectFill"></image>
				</view>
				
				<view class="flex-between; fixed fixed1" style="padding:0 50rpx;">
					<image src="/static/guide/5.png" mode="aspectFill" style="width: 100rpx;height: 154rpx;"></image>
					<image src="/static/guide/6.png" mode="aspectFill" style="width: 100rpx;height: 154rpx;"></image>
					<image src="/static/guide/7.png" mode="aspectFill" style="width: 100rpx;height: 154rpx;"></image>
					<image src="/static/guide/8.png" mode="aspectFill" style="width: 100rpx;height: 154rpx;"></image>
				</view>
				<view class="fixed fixed2" style="text-align: center;">
					<image src="/static/guide/9.png" mode="aspectFill" style="width: 576rpx;height: 171rpx;"></image>
				</view>
				<view class="fixed fixed3" style="text-align: center;">
					<image src="/static/guide/10.png" mode="aspectFill" style="width: 126rpx;height: 126rpx;"></image>
				</view>
			</view>
			<view style="text-align: center;" class="tag_">
				<image src="/static/guide/4.png" style="width: 497rpx;height: 72rpx;" mode="aspectFill"></image>
			</view>
			<view class="user" v-if="page=='user'">
				<view class="share_ fixed">
					<image src="/static/guide/12.png" style="width: 98rpx;height: 42rpx;background: #fff;padding: 4rpx 6rpx;border-radius: 8rpx 0 0 8rpx;" mode="aspectFill"></image>
				</view>
				<view class="fixed line">
					<image src="/static/guide/11.png" style="width: 300rpx;height: 155rpx;" mode="aspectFill"></image>
				</view>
			</view>
			<view class="footer flex-between">
				<view class="f-left">
					<image :src="page=='index'?'/static/tab-title-1.png':'/static/tab-title-2.png'" style="width: 54rpx;height: 54rpx;"
					 mode="aspectFill"></image>
					<view v-show="page=='index'" style="font-size: 20rpx;color: #FF1D12;margin-top: 6rpx;text-align: center;">资源
					</view>
					<view v-show="page=='user'" style="font-size: 20rpx;color: #9B9B9B;margin-top: 6rpx;text-align: center;">资源 </view>
				</view>
				<view>
					<image src="/static/tab-title-5.png" style="width: 80rpx;height: 62rpx;" mode="aspectFill"></image>
				</view>
				<view class="r-left">
					<image :src="page=='index'?'/static/tab-title-4.png':'/static/tab-title-3.png'" style="width: 54rpx;height: 54rpx;"
					 mode="aspectFill"></image>
					<view v-show="page=='index'" style="font-size: 20rpx;color: #9B9B9B;margin-top: 6rpx;text-align: center;">我的
					</view>
					<view v-show="page=='user'" style="font-size: 20rpx;color: #FF1D12;margin-top: 6rpx;text-align: center;">我的 </view>
				</view>
			</view>
		</view> 
</template>

<script>
	export default {
		props: ['page', 'isShowGuide'],
		data() {
			return {}
		},
		watch: {},
		methods: {
			hideGuide() {
				this.$emit('hideGuide')
				// if (this.page == 'index') {
				// 	this.$emit('hideIndexGuide')
				// }
				// if (this.page == 'user') {
				// 	this.$emit('hideUserGuide')
				// }
			}
		}
	}
</script>

<style lang="scss" scoped>
	.guide {
		position: fixed;
		width: 750rpx;
		height: 100vh;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.8);
		z-index: 100;
	}

	.tag_ {
		position: absolute;
		width: 750rpx;
		bottom: calc((100vh - 72rpx) / 2);
	}

	.fixed {
		position: fixed;
		width: 750rpx;
		left: 0;
		z-index: 102;
	}

	.fixed1 {
		bottom: 370rpx;
	}

	.fixed2 {
		bottom: 200rpx;
	}

	.fixed3 {
		bottom: 50rpx;
	}
	.share_{
		top: 50rpx;
		right: 0;
		text-align: right;
	}
	.line{
		top: 78rpx;
		right: 100rpx;
		text-align: right;
		padding-right: 60rpx;

	}
	.footer {
		position: fixed;
		width: 750rpx;
		height: 100rpx;
		padding: 10rpx 100rpx;
		background-color: rgba(100, 100, 100, 0.9);
		left: 0;
		bottom: 0;
		z-index: 101;
	}
</style>
