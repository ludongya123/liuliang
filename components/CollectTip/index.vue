<template>
	<view class="point-out" v-show="isShow">
		添加到我的小程序，随时匹配最佳合作资源！
	</view>
</template>

<script>
	export default {
		data(){
			return {
				isShow: true
			}
		},
		mounted() {
			setTimeout(()=>{
				this.isShow = false
			},5000)
		}
	}
</script>

<style lang="scss" scoped>
	.point-out{
		position: fixed; 
		width: 700rpx; 
		line-height:42rpx;
		top:16rpx;
		left: 25rpx;
		font-size:30rpx;
		padding: 15rpx 30rpx;   
		color:#fff;   
		border-radius: 16rpx;
		background:rgba(0,0,0,0.8);
		box-shadow:0 3rpx 10rpx rgba(0,0,0,0.1); 
		z-index: 50;
		&:before{
			content: '';
			position: absolute;
			width:0;
			height: 0; 
			border: 15rpx solid transparent;
			border-bottom-color:  rgba(0,0,0,0.8);
			top:-28rpx;
			right:108rpx;  
		}
	}
</style>
