<template>
	<view class="wrapper">
		<view class="title" :style="{height:mold==''?'auto':'130rpx'}">
			<view class="title-content flex-start" :style="{padding:mold==''?'0':'22rpx  11rpx 0'}">
				<image class="title-pic" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3273007653,326282463&fm=15&gp=0.jpg"
				 mode=""></image>

				<view class="title-name">
					<view class="flex-start">
						<text class="user-name" :style="{color:mold==''?'#191919':'#FFf'}">郑海星</text>
						<image class="user-icon" src="/static/card-vip.png" mode="aspectFill"></image>
						<text class="user-tag">官方推荐</text>
					</view>
					<view class="info" :style="{color:mold==''?'#7D7D7D':'#FFf'}">
						网易云音乐商务总监·10分钟前活跃
					</view>
				</view>

				<view class="title-right">
					<view class="amount" :style="{color:mold==''?'#FF1D12':'#FFf'}">1.4/3.2万 </view>
					<view class="tip" :style="{color:mold==''?'#7D7D7D':'#fff'}"> 日活/注册 </view>
				</view>

			</view>
			<image v-if="mold!=''" class="title-bg" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2479437964,3999723968&fm=26&gp=0.jpg"
			 mode="aspectFill"></image>
		</view>
		<view class="tags flex-start">
			<view class="tag-item">
				曝光标签1
			</view>
			<view class="tag-item">
				曝光标签2
			</view>
			<view class="tag-item">
				曝光标签3
			</view>
			<view class="tag-item">
				曝光标签3
			</view>
			<view class="tag-item">
				曝光标签3
			</view>
		</view>
		<view class="intro flex-between">
			<view class="intro-detail">
				寻国内优质音乐厂牌、潮流社区进行线下品牌联合品潮流社区进行线下品牌联合品
			</view>
			<image class="arrow" src="/static/arrow-btm.png" mode="aspectFill"></image>
		</view>
		<view class="xiline"> </view>
		<view class="btm flex-between">
			<view class="btm-left">
				<text class="category">音乐/视频/阅读</text>
				<text class="time">08.02 16:24:36</text>
			</view>
			<view class="btm-right flex-start">
				<view class="look-amount">
					<image class="icon" src="/static/eye.png" mode=""></image>
					<text class="eyes">1.2万</text>
				</view>
				<view>
					<image class="icon" src="/static/exchange.png" mode=""></image>
					<text class="text">换量</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			mold:{
				type: String,
				default:''
			} 
		},
		data() {
			return {}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.wrapper {
		padding: 30rpx 25rpx 0;
		background: #fff;
		margin-bottom: 20rpx;
		.title {
			position: relative; 
			.title-bg {
				width: 700rpx;
				height: 130rpx;
				border-radius: 10rpx;
				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;
			}

			.title-content {
				position: relative;
				// padding: 22rpx  11rpx 0;
				z-index: 2;
				.title-pic {
					width: 70rpx;
					height: 70rpx;
					border-radius: 50%;
				}

				.title-name {
					flex: 1;
					margin: 0 15rpx;

					.user-name {
						font-size: 32rpx;
						line-height: 52rpx;
						font-weight: bold;
					}

					.user-icon {
						width: 50rpx;
						height: 50rpx;
					}

					.user-tag {
						padding: 2rpx 5rpx;
						color: #fff;
						background: #FF6A6A;
						font-size: 20rpx;
						line-height: 28rpx;
					}
					.info{
						font-size: 26rpx;
						line-height: 37rpx;
						color:#fff;
					}
				}
				.title-right{
					font-size: 26rpx;
					.amount{
						font-weight: bold;
					}
					.amount ,.tip{
						line-height: 37rpx;
					}
				}
			}
			
		}
		.tags{
			// padding: 
			flex-wrap: wrap;
			padding-bottom: 20rpx;
			.tag-item{
				font-size: 24rpx;
				margin-top: 20rpx;
				margin-right:20rpx;
				padding: 8rpx 20rpx;
				border-radius: 8rpx;
				line-height: 33rpx;
				color:#fff;
				background: #4AC1BD;
			}
		}
		.intro{
			padding-bottom: 25rpx;
			.intro-detail{
				font-size: 28rpx;
				line-height: 36rpx;
				color:#141414;
				flex:1;
				@include singleEls;
			}
			.arrow{
				width:32rpx;
				height: 32rpx;
				margin-left:20rpx;
			}
		}
		.btm{
			padding: 21rpx 0 30rpx;
			.btm-left{
				.category{ 
					line-height:37rpx;
					font-size:26rpx;  
					color:rgba(29,29,29,1); 
				}
				.time{ 
					font-size:26rpx; 
					line-height:36rpx;
					color:rgba(125,125,125,1); 
					margin-left: 10rpx;;
				}
			}
			.btm-right{
				.look-amount{
					margin-right: 30rpx;
				}
				.icon{
					width:32rpx;
					height: 32rpx;
					vertical-align: middle;
					margin-right: 6rpx;
				}
				.eyes{
					font-size: 26rpx;
					color:#7D7D7D;
				}
				.text{
					font-size: 26rpx;
					color: #1D1D1D;
				}
			}
		}
	}
</style>
