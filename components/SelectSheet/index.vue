<template>
	<view class="wrapper">
		<view class="layer" v-show="isShow" @click="hideLayer"> </view>
		<view class="layer-box" :class="isShow?'show':''">
			<view class="title">
				性别选择
			</view>
			<view class="sheet">
				<block v-for="(item,index) in list" :key="index">
					<view class="sheet-item" :class="sex==index?'active':''" @click="confirmSex(index)">
						{{item}}
					</view>
					<view class="xiline" v-if="index!=list.length-1"></view>
				</block>
			</view>
			<view class="cancel" @click="hideLayer">
				取消
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['sex','isShow'],
		data(){
			return{
				list:["男","女"]
			}
		},
		methods:{
			hideLayer(){
				this.$emit('hideActionSheet')
			},
			confirmSex(index){
				this.$emit('chooseItem',index)
			}
		}
	}
</script>

<style scoped lang="scss">
	.layer{
		position: fixed;
		top:0;
		left:0;
		width:750rpx;
		height: 100vh;
		background: rgba(0,0,0,0.5);
	}
	.layer-box{
		position: fixed;
		bottom: -410rpx;
		width:750rpx;
		background-color: #f4f4f4;
		 text-align: center;
		 border-radius: 20rpx 20rpx 0 0;
		 overflow: hidden;
		 transition: bottom 0.3s ease-in-out;
		 &.show{
			bottom:0;
		 }
		 .title{
			 color:#9B9B9B;  
			 font-size:30rpx; 
			 line-height:35rpx; 
			 background: #fff;
			 padding: 37rpx 0 24rpx;
		 }
		.sheet{
			background: #fff;
			margin-bottom:20rpx; 
		}
		.cancel,.sheet-item{ 
			padding: 25rpx 0;
			font-size:36rpx; 
			line-height:50rpx;
			color:#141414; 
			background: #fff;
			&.active{
				color:#FF1D12;
			}
		}
	}
</style>
