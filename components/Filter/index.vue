<template>
	<view class="fliter-wrapper">
		<view class="condition flex-start">
			<view class="condition_item" @click="showChooseTypeOrder">
				<text class="text">{{typeOrder==0?'综合':typeOrder==1?'线上':typeOrder==2?'线下':'跨界'}}</text>
				<image class="icon" src="/static/arrow-btm.png" mode=""></image>
			</view>
			<view class="condition_item" @click="showChooseUpdateOrder">
				<text class="text">{{updateOrder==0?'最新':'活跃'}}</text>
				<image class="icon" src="/static/arrow-btm.png" mode=""></image>
			</view>
			<view class="condition_item" @click="changeDayWork">
				<text class="text">日活</text>
				<image class="icon" :src="dayWorkTag=='1'?'/static/jp2.png':dayWorkTag=='-1'?'/static/jp1.png':'/static/jp.png'"
				 mode=""></image>
			</view>
			<view class="condition_item" @click="changeRegiste">
				<text class="text">注册</text>
				<image class="icon" :src="registTag=='1'?'/static/jp2.png':registTag=='-1'?'/static/jp1.png':'/static/jp.png'" mode=""></image>
			</view>
			<view class="filter">
				<image class="filt-icon" src="/static/xs.png" mode=""></image>
			</view>
		</view>
		<view class="modal" v-show="false"> </view>
		<view class="layer-box" v-show="false">
			<view class="layer-content">
				<view class="input-area">
					<view class="title"> 日活区间</view>
					<view class="flex-between">
						<input class="input" type="text" placeholder="最低日活(万)" value="" placeholder-style="font-size:28rpx;color:#7D7D7D;"/>
						<text>-</text>
						<input class="input" type="text" placeholder="最高日活(万)" value="" placeholder-style="font-size:28rpx;color:#7D7D7D;" />
					</view>
					
					<view class="title"> 客流区间</view>
					<view class="flex-between">
						<input class="input" type="text" placeholder="最低日均客流" value="" placeholder-style="font-size:28rpx;color:#7D7D7D;"/>
						<text>-</text>
						<input class="input" type="text" placeholder="最高日均客流" value="" placeholder-style="font-size:28rpx;color:#7D7D7D;"/>
					</view>
					
					<view class="title"> 注册区间</view>
					<view class="flex-between">
						<input class="input" type="text" placeholder="最低注册用户-万" value="" placeholder-style="font-size:28rpx;color:#7D7D7D;"/>
						<text>-</text>
						<input class="input" type="text" placeholder="最高注册用户-万" value="" placeholder-style="font-size:28rpx;color:#7D7D7D;"/>
					</view>
				</view>
				<view class="res-type">
					<view class="title flex-between">
						<text>资源类型</text>
						<image class="a-icon" src="/static/arrow-btm.png" mode=""></image>
					</view>
					<view class="flex-start res-type-list">
						<text class="item" v-for="(item,index) in resTypeList" :key="index"> {{item}}</text>
					</view>
				</view>
			</view>
			<view class="handle-btn flex-around">
				<text class="btn reset">重置</text>
				<text class="btn confirm">确定</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['currentId'],
		data() {
			return {
				typeOrder: 0,
				typeOrderList: ['综合', '线上', '线下', '跨界'],
				updateOrder: 0,
				updateOrderList: ['最新', '活跃'],
				dayWorkTag: '', // 1 和-1
				registTag: '' ,// 1 、-1
				resTypeList:['全部','广告位','优惠券','费用支持','广告位','优惠券','费用支持','社交电商/小红书','优惠券','费用支持','广告位','优惠券','费用支持']// 资源类型
			};
		},
		watch: {
			currentId() {
				this.typeOrder = 0
				this.resetOrder()
			}
		},
		methods: {
			/**
			 * 显示类型筛选项
			 */
			showChooseTypeOrder() {
				uni.showActionSheet({
					itemList: this.typeOrderList,
					success: (res) => {
						this.resetOrder()
						this.typeOrder = res.tapIndex
						this.$emit('switchTypeOrder', this.typeOrder)
					}
				})
			},
			/**
			 * 显示最新和日活排序筛选项
			 */
			showChooseUpdateOrder() {
				uni.showActionSheet({
					itemList: this.updateOrderList,
					success: (res) => {
						this.resetOrder()
						this.updateOrder = res.tapIndex
						this.$emit('switchUpdateOrder', this.updateOrder)
					}
				})
			},
			/**
			 * 点击日活排序
			 */
			changeDayWork() { 
				this.registTag = ''
				if (this.dayWorkTag === '') {
					this.dayWorkTag = 1
				} else {
					this.dayWorkTag = -this.dayWorkTag
				}
			},
			/**
			 * 点击注册量排序
			 */
			changeRegiste() {
				this.dayWorkTag = ''
				if (this.registTag === '') {
					this.registTag = 1
				} else {
					this.registTag = -this.registTag
				}
			},
			/**
			 * 重置所有筛选项
			 */
			resetOrder() { 
				this.updateOrder = 0
				this.dayWorkTag = ''
				this.registTag = ''
			}
		}
	}
</script>

<style lang="scss">
	.fliter-wrapper {
		padding: 20rpx 25rpx;
		background: #fff;
		border-bottom: 1rpx solid #eee;

		.condition {
			.condition_item {
				flex: 1;
			}

			.text {
				padding: 20rpx 0;
				color: #3E3E3E;
				font-size: 30rpx;
				line-height: 36rpx;
			}

			.icon {
				width: 30rpx;
				height: 30rpx;
				vertical-align: middle;
				margin-left: 10rpx;
			}
		}

		.filter {
			width: 140rpx;
			text-align: right;

			.filt-icon {
				width: 32rpx;
				height: 32rpx;
				vertical-align: middle;
			}
		}
	}
	.modal,.layer-box{
		position: fixed;
		width: 750rpx;
		height: 100vh;
		z-index:10;
		background: rgba(0,0,0,0.5);
		top:0;
		left:0;
	}
	.layer-box{
		width:700rpx;
		left: 50rpx;
		top:0; 
		background: #fff;
		z-index:11;
		background: #F4F4F4;
		.layer-content{
			height: calc(100vh - 180rpx); 
			overflow-y: scroll; 
			.input-area{
				background: #fff;
				padding:1rpx 30rpx 40rpx;
				.title{
					margin: 40rpx 0 20rpx;
					color:#191919;
					font-size: 30rpx;
				}
				.input{
					width:280rpx;
					height: 70rpx;
					text-align: center;
					border-radius: 10rpx;
					font-size: 30rpx;
					color:#333333;
					background: #f4f4f4;
				}
			}
			.res-type{
				padding: 30rpx 0 40rpx;
				background: #fff;
				margin-top:20rpx;
				.title{
					padding: 0 25rpx 10rpx;
					font-size: 30rpx;
					color: #191919;
					.a-icon{
						width:30rpx;
						height: 30rpx;
					}
				}
				.res-type-list{
					flex-wrap: wrap;
					padding-left:25rpx;
					.item{
						width:182rpx; 
						line-height: 1;
						padding: 16rpx 0;
						text-align: center;
						font-size: 26rpx;
						color:#868686;
						border-radius: 10rpx;
						background: #F4F4F4;
						&:nth-child(3n-1) {
							margin-left: 50rpx;
							margin-right: 50rpx;
						}
						margin-top:20rpx;
					}
				}
			}
		}
		.handle-btn{
			position: absolute;
			width:700rpx;
			bottom:50rpx;
			.btn{
				width:280rpx;
				line-height: 88rpx;
				font-size: 30rpx;
				border-radius: 16rpx;
				text-align: center;
				&.reset{
					color:#141414;
					background: #fff;
				}
				&.confirm{
					color: #fff;
					background: #FF1D12;
				}
			}
		}
	}
</style>
