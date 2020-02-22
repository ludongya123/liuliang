<template>
	<view class="about-cont">
		<image class="com-icon" src="/static/logo.png"></image>
		<view class="com-name">
			BD联盟
		</view>
		<view class="version">
			Version 2.0.0
		</view>
		<view class="footer">
			<view class="tip">
				星引网络科技 版权所有
			</view>
			<view class="tip">
				Copyright © 2019 - 2069 XinYin. All rights reserved.
			</view>
			<view class="tip">
				<text>《服务条款》</text>和<text>《隐私政策》</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f4f4f4;
}
.about-cont{
	padding-top:326rpx;
	text-align: center;
	.com-icon{
		width: 180rpx;
		height: 180rpx;
	}
	.com-name{ 
		line-height:60rpx;
		font-size:60rpx; 
		font-weight:500; 
		color:#141414; 
		margin:20rpx 0 10rpx;
	}
	.version{ 
		line-height:26px;
		font-size:26rpx; 
		color:#7d7d7d; 
	}
	.footer{ 
		position: fixed;
		width:100%;
		bottom:52rpx;
		.tip{ 
			margin-bottom: 10rpx;
			line-height:37rpx;
			font-size:26rpx; 
			color:#7d7d7d; 
			text{
				color: #141414;
			}
		}
	}
}
</style>
