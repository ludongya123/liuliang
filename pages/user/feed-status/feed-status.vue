<template>
	<view class="feed-cont">
		<icon type="success" size="55" color="#FF1D12" v-show="status===1"></icon>
		<icon type="clear" size="55" color="#9B9B9B" v-show="status===0"></icon>
		<view class="title">
			提交{{status===1?'成功':'失败'}}！
		</view>
		<view class="tip" v-show="status===1">
			感谢您的反馈~
		</view>
		<view class="tip"  v-show="status===1">
			后续处理进度，我们将通过系统消息告知您~
		</view>
		<view class="btn" v-show="status===1">
			返回首页
		</view>
		<view class="btn" v-show="status===0"> 
			重新提交
		</view>
		<view class="back" v-show="status===0">
			返回首页
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status:0
			};
		}
	}
</script>

<style lang="scss">
page{
	background: #f4f4f4;
}
.feed-cont{
	padding-top:290rpx;
	text-align: center;
}
.title{ 
	font-size:36rpx; 
	font-weight:400;
	line-height:52rpx;
	color: #1A1A1A;
	margin:52rpx 0 50rpx;
}
.tip{ 
	font-size:26rpx; 
	font-weight:400;
	line-height:37rpx;
	color: #999999;
	margin-bottom: 10rpx;
}
.btn{
	width:380rpx;
	line-height:88rpx;
	background:#FF1D12; 
	border-radius:16rpx;
	color:#fff;
	font-size: 36rpx;
	text-align: center;
	margin: 0 auto;
	margin-top:116rpx;
}
.back{ 
	line-height:37rpx;
	font-size:26rpx;  
	color:#999; 
	margin-top: 30rpx;
}
</style>
