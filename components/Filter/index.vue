<template>
	<view>
		<view class="layer-box" :class="isShow?'show':''">
			<view class="layer-content">
				<view class="input-area">
					<view class="title"> 日活区间</view>
					<view class="flex-between">
						<input class="input" type="text" placeholder="最低日活(万)" value="" placeholder-style="font-size:28rpx;color:#7D7D7D;" />
						<text>-</text>
						<input class="input" type="text" placeholder="最高日活(万)" value="" placeholder-style="font-size:28rpx;color:#7D7D7D;" />
					</view>

					<view class="title"> 客流区间</view>
					<view class="flex-between">
						<input class="input" type="text" placeholder="最低日均客流" value="" placeholder-style="font-size:28rpx;color:#7D7D7D;" />
						<text>-</text>
						<input class="input" type="text" placeholder="最高日均客流" value="" placeholder-style="font-size:28rpx;color:#7D7D7D;" />
					</view>

					<view class="title"> 注册区间</view>
					<view class="flex-between">
						<input class="input" type="text" placeholder="最低注册用户-万" value="" placeholder-style="font-size:28rpx;color:#7D7D7D;" />
						<text>-</text>
						<input class="input" type="text" placeholder="最高注册用户-万" value="" placeholder-style="font-size:28rpx;color:#7D7D7D;" />
					</view>
				</view>
				<view class="res-type">
					<view class="title flex-between">
						<text>资源类型</text>
						<image class="a-icon" src="/static/arrow-btm.png"></image>
					</view>
					<view class="flex-start res-type-list">
						<view class="flex-center" v-for="(item,index) in resTypeList" :key="index">
							<text class="item"> {{item}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="handle-btn flex-around">
				<view class="close"  @click="hideFilter">
					<image class="close-icon" src="/static/close.png"></image>
				</view>
				<text class="btn reset">重置</text>
				<text class="btn confirm">确定</text>
			</view>
		</view>
		<view class="modal" v-show="isShow" @click="hideFilter"> </view>
	</view>
</template>

<script>
	export default {
		props:{
			isShow:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				resTypeList: ['全部', '广告位', '优惠券', '费用支持', '广告位', '优惠券', '费用支持', '社交电商/小红书', '优惠券', '费用支持', '广告位', '优惠券', '费用支持'], // 资源类型
			}
		},
		methods:{
			hideFilter(){
				this.$emit('hideFilter')
			}
		}
	}
</script>

<style lang="scss">
	.modal,
	.layer-box {
		position: fixed;
		width: 750rpx;
		height: 100vh;
		z-index: 11;
		background: rgba(0, 0, 0, 0.5);
		top: 0;
	} 
	.modal {
		left: 0;
	}

	.layer-box {
		width: 700rpx;
		right: -700rpx;
		top: 0;
		background: #fff;
		z-index: 30;
		background: #F4F4F4;
		transition: all 0.3s ease-in-out;

		&.show {
			right: 0;
		}

		.layer-content {
			height: calc(100vh - 88rpx);
			overflow-y: scroll;

			.input-area {
				background: #fff;
				padding: 1rpx 30rpx 40rpx;

				.title {
					margin: 40rpx 0 20rpx;
					color: #191919;
					font-size: 30rpx;
				}

				.input {
					width: 280rpx;
					height: 70rpx;
					text-align: center;
					border-radius: 10rpx;
					font-size: 30rpx;
					color: #333333;
					background: #f4f4f4;
				}
			}

			.res-type {
				padding: 30rpx 0 40rpx;
				background: #fff;
				margin-top: 20rpx;

				.title {
					padding: 0 25rpx 10rpx;
					font-size: 30rpx;
					color: #191919;

					.a-icon {
						width: 30rpx;
						height: 30rpx;
					}
				}

				.res-type-list {
					flex-wrap: wrap;
					padding-left: 25rpx;
					align-items: stretch;

					.flex-center {

						width: 182rpx;
						height: 60rpx;
						border-radius: 10rpx;
						background: #F4F4F4;
						padding: 16rpx 0;

						&:nth-child(3n-1) {
							margin-left: 50rpx;
							margin-right: 50rpx;
						}

						margin-top:20rpx;
					}

					.item {
						line-height: 1;
						// padding: 16rpx 0;
						text-align: center;
						font-size: 26rpx;
						color: #868686;
					}
				}
			}
		}

		.handle-btn {
			position: absolute;
			width: 700rpx;
			bottom: 0;
			background-color: #fff;

			.close {
				width: 116rpx;
				height: 88rpx;
				text-align: center;
				padding-top: 31rpx;
				position: relative;

				&:after {
					content: '';
					position: absolute;
					width: 1rpx;
					height: 63rpx;
					border-left: 2rpx solid #E5E5E5;
					right: 0;
					top: 12rpx;
				}
			}

			.close-icon {
				width: 26rpx;
				height: 26rpx;
				opacity: 0.6;
			}

			.btn {
				flex: 1;
				line-height: 88rpx;
				font-size: 30rpx;
				text-align: center;

				&.reset {
					color: #141414;
					background: #fff;
				}

				&.confirm {
					color: #fff;
					background: #FF1D12;
				}
			}
		}
	}
</style>
