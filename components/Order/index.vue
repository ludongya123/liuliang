<template>
	<view class="filter-cont">


		<view class="fliter-wrapper" :class="isShowTypeOrderOption?'fixed':''">
			<view class="condition flex-start">
				<view class="condition_item flex-start" @click="showChooseTypeOrder">
					<text class="text">{{typeOrder==0?'综合':typeOrder==1?'线上':typeOrder==2?'线下':'跨界'}}</text>
					<image class="icon" src="/static/arrow-btm.png"></image>
				</view>
				<view class="condition_item flex-start" @click="showChooseUpdateOrder">
					<text class="text">{{updateOrder==0?'最新':'活跃'}}</text>
					<image class="icon" src="/static/arrow-btm.png"></image>
				</view>
				<view class="condition_item flex-start" @click="changeDayWork">
					<text class="text">日活</text>
					<image class="icon" :src="dayWorkTag=='1'?'/static/jp2.png':dayWorkTag=='-1'?'/static/jp1.png':'/static/jp.png'"></image>
				</view>
				<view class="condition_item flex-start" @click="changeRegiste">
					<text class="text">注册</text>
					<image class="icon" :src="registTag=='1'?'/static/jp2.png':registTag=='-1'?'/static/jp1.png':'/static/jp.png'"></image>
				</view>
				<view class="filter" @click="showFilter">
					<image class="filt-icon" src="/static/sx.png"></image>
				</view>
			</view>
		</view>


		<view class="modal" v-show="isShowTypeOrderOption" @click="hideLayer"> </view>
		<!-- 综合选项的下拉菜单 -->
		<view class="select-group" v-show="isShowTypeOrderOption">
			<view class="flex-start select-item" v-for="(item,index) in typeOrderList">
				<text class="txt"> {{item}}</text>
				<image class="icon" src="/static/ok.png" v-show="typeOrder == index"></image>
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
				isShowTypeOrderOption: false, // 综合选项的下拉菜单
				updateOrder: 0,
				updateOrderList: ['最新', '活跃'],
				dayWorkTag: '', // 1 和-1
				registTag: '' // 1 、-1 
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
				// uni.showActionSheet({
				// 	itemList: this.typeOrderList,
				// 	success: (res) => {
				// 		this.resetOrder()
				// 		this.typeOrder = res.tapIndex
				// 		this.$emit('switchTypeOrder', this.typeOrder)
				// 	}
				// })
				this.isShowTypeOrderOption = true
				this.$emit('filterFixed')
			},
			/**
			 * 显示筛选弹层
			 */
			showFilter(){
				this.$emit('showFilter')
			},
			/**
			 * 隐藏弹出层，包括筛选层，综合选择下拉菜单，最新选择下拉菜单
			 */
			hideLayer() {
				if (this.isShowTypeOrderOption) {
					this.isShowTypeOrderOption = false
					this.$emit('filterFlow')
				}
				if (this.isShowLayer) {
					this.isShowLayer = false
				}
			},
			/**
			 * 
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
	.filter-cont {}

	.fliter-wrapper {
		padding: 0 25rpx;
		background: #fff;

		height: 82rpx;

		&.fixed {
			width: 750rpx;
			position: fixed;
			top: 74rpx;
			left: 0;
			z-index: 20;
		}

		.condition {
			border-bottom: 1rpx solid #eee;

			.condition_item {
				flex: 1;
			}

			.text {
				padding: 20rpx 0;
				color: #3E3E3E;
				font-size: 30rpx;
				line-height: 42rpx;
			}

			.icon {
				width: 26rpx;
				height: 26rpx;
				margin-left: 4rpx;
				display: block;
			}
		}

		.filter {
			width: 140rpx;
			text-align: right;

			.filt-icon {
				width: 28rpx;
				height: 28rpx;
				opacity: 0.6;
			}
		}
	}

	.select-group {
		position: fixed;
		top: 156rpx;
		left: 0;
		width: 750rpx;
		padding: 14rpx 36rpx 0;
		background: #f4f4f4;
		z-index: 11;

		.select-item {
			.txt {
				font-size: 30rpx;
				line-height: 42px;
				color: #141414;
			}

			.icon {
				width: 32rpx;
				height: 32rpx;
				display: block;
				margin-left: 30rpx;
			}
		}
	}

	
</style>
