<template>
	<view>
		<view class="tip">
			请设置2-24个字符，不包括 {{code}} 等无效字符哦~
		</view>
		<input type="text" v-model="nickname" placeholder="请输入昵称" placeholder-style="font-weight:400;color:#999;font-size:30rpx"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code:'@ <> / ',
				nickname:''
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page{
	background: #f4f4f4;
}
.tip{ 
	font-size:26rpx; 
	line-height:52rpx;
	padding: 20rpx 24rpx;
	color:#7D7D7D; 
}
input{
	font-size: 30rpx;
	font-weight: 400;
	height: 88rpx;
	background: #fff;
	color:#141414;
	padding:0 24rpx;
}
</style>
