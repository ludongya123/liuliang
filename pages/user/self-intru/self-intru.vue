<template>
	<view>
		<view class="tip" @click="showa">
			有趣的个人介绍会吸引更多人脉哦~
		</view>
		<view class="textarea">
			<textarea v-model="val"  placeholder="个性签名~" maxlength="100" auto-focus	/>
			<view class="count">{{val.length}}/100</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				val:'ggregrger'
			}
		},
		methods: { 
			showa(){
				console.log(this.val)
			}
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
.textarea{
	background: #fff;
	textarea{
		width:750rpx;
		padding:30rpx 24rpx ;
		box-sizing: border-box;
		font-size: 30rpx;
		color:#141414;
		font-weight: 400;
		line-height: 40rpx;
	}
	.count{
		text-align: right;
		padding-right: 20rpx;
		padding-bottom: 20rpx; 
		font-size:26rpx;  
		color:#7D7D7D; 
	}
}
</style>
