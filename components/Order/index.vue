<template>
	<view class="filter-cont">


		<view class="fliter-wrapper" :class="fixed?'fixed':''" :style="'top:'+top+'rpx'">
			<view class="condition flex-start">
				<view class="condition_item flex-start" @click="showChooseOrderBy(1)">
					<text class="text">{{typeOrderIndex==0?'综合':typeOrderIndex==1?'线上':typeOrderIndex==2?'线下':'跨界'}}</text>
					<image class="icon" src="/static/arrow-btm.png"></image>
				</view>
				<view class="condition_item flex-start"  @click="showChooseOrderBy(2)">
					<text class="text">{{updateOrderIndex==0?'最新':'活跃'}}</text>
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

		<view class="layer-box" :class="isShowFilter?'show':''">
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
				<view class="close" @click="hideModal">
					<image class="close-icon" src="/static/close.png"></image>
				</view>
				<text class="btn reset">重置</text>
				<text class="btn confirm">确定</text>
			</view>
		</view>
		
		<view class="picker-view-wrapper" :class="isShowPickerView?'show':''">
			<view class="flex-between handel">
				<text class="cancel" @click="hideModal">取消</text>
				<text class="confirm" @click="confirmOrderBy">确认</text>
			</view>
			<picker-view v-show="orderByType==1" @change="changePickerView($event,1)" :value="chooseValue1" class="picker-view" indicator-style="height: 40px; " style="width: 100%; height: 400rpx;">
				<picker-view-column v-if="">
					<view class="picker-view-item" :class="chooseValue1[0]==index?'select-color':''" v-for="(item,index) in typeOrderList" :key="index">
						{{item}}
					</view>
				</picker-view-column>
			</picker-view>
			<picker-view v-show="orderByType==2" @change="changePickerView($event,2)" :value="chooseValue2" class="picker-view" indicator-style="height: 40px; " style="width: 100%; height: 400rpx;">
				<picker-view-column v-if="">
					<view class="picker-view-item" :class="chooseValue2[0]==index?'select-color':''" v-for="(item,index) in updateOrderList" :key="index">
						{{item}}
					</view>
				</picker-view-column>
			</picker-view>
		</view>
		
		<view class="modal" v-show="isShowFilter || isShowPickerView" @click="hideModal"> </view>
 

	</view>
</template>

<script>
	export default {
		props: ['currentId','fixed','top'],
		data() {
			return {
				orderByType:0,// 
				chooseValue1:[0], // picker-view选项 综合类型排序val值
				chooseValue2:[0],// 最新，活跃选项排序的val值
				typeOrderIndex: 0,
				typeOrderList: ['综合', '线上', '线下', '跨界'],
				activeStyle:`color:#FF1D12;font-weight:bold;`,
				isShowTypeOrderOption: false, // 综合选项的下拉菜单
				updateOrderIndex: 0,
				updateOrderList: ['最新', '活跃'],
				dayWorkTag: '', // 1 和-1
				registTag: '', // 1 、-1 
				resTypeList: ['全部', '广告位', '优惠券', '费用支持', '广告位', '优惠券', '费用支持', '社交电商/小红书', '优惠券', '费用支持', '广告位', '优惠券', '费用支持'], // 资源类型
				isShowFilter: false ,// 侧滑的筛选
				isShowPickerView:false// picker是否显示
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
			 * 显示综合类型排序的pickerview
			 */
			showChooseOrderBy(num){
				this.isShowPickerView = true
				this.orderByType = num
				uni.hideTabBar({
					
				})
			},
			/**
			 * picker改变
			 */ 
			changePickerView(e,num){ 
				if(num == 1) {
					this.chooseValue1 = e.detail.value
				} else {
					this.chooseValue2 = e.detail.value
				} 
			},
			/**
			 * 显示筛选弹层
			 */
			showFilter() {
				this.isShowFilter = true
				uni.hideTabBar({
					
				})
			}, 
			/**
			 * 隐藏弹出层，包括筛选层，综合选择下拉菜单，最新选择下拉菜单
			 */
			hideModal() { 
				if (this.isShowFilter) {
					this.isShowFilter = false
				}
				if(this.isShowPickerView) {
					this.isShowPickerView = false
				}
				uni.showTabBar({
					
				})
			},
			/**
			 * 确认排序
			 */
			confirmOrderBy(){
				if(this.orderByType == 1) {
					this.typeOrderIndex = this.chooseValue1[0]
				} else {
					this.updateOrderIndex = this.chooseValue2[0]
				}
				this.hideModal()
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
		padding: 0 25rpx;
		background: #fff; 
		height: 82rpx; 
		&.fixed {
			width: 750rpx;
			position: fixed; 
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


	.modal,
	.layer-box {
		position: fixed;
		width: 750rpx;
		height: 100vh;
		z-index: 20;
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
	.picker-view-wrapper{
		position: fixed;
		width: 750rpx;
		 bottom: -550rpx;
		 left: 0;
		 background-color: #fff;
		 z-index: 30;
		 border-radius: 20rpx 20rpx 0 0;
		 overflow: hidden;
		 transition: bottom 0.3s ease-in-out;
		 &.show{
			 bottom: 0;
		 }
		 .handel{
			 border-bottom:1rpx solid #eee;
			 .cancel,.confirm{
				width: 120rpx;
				line-height: 100rpx;
				text-align: center;
				font-size: 30rpx;
				font-weight: 600;
			 }
			 .cancel{
				 color: #7d7d7d;
			 }
			 .confirm{
				 color:  #FF1D12;
			 }
		 }
		.picker-view{ 
			height: 300rpx;
			.picker-view-item{
				line-height: 40px;
				text-align:center;
				&.select-color{
					font-weight: bold;
					color: #FF1D12;
				}
			}
		}
	}
</style>
