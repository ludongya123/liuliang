<template>
	<view class="container">
		<view class="top-bar" v-show="!isFilterFixed">
			<view class="navbar-header flex-start">
				<view class="all" :class="activeTag=='all'?'active':''" @click="chooseItem('all')">
					全部
				</view>
				<view class="swiper">
					<swiper @change="changeNavSwiper" display-multiple-items="3" :current="currentSwiper">
						<swiper-item v-for="(item,index) in options" :key="index">
							<view class="swiper-item" :class="activeTag=='nav'+index?'active':''" @click="chooseItem(index)">{{item}}</view>
						</swiper-item>
					</swiper>
				</view>
				<view class="more" :class="activeTag=='more'?'active':''" @click="chooseItem('more')">
					更多
				</view>
				<image @click="toSearchPage" class="search-icon" src="/static/search-index.png"></image>
			</view>
			<view class="line" :style="{left: leftRpx+'rpx'}"></view>
		</view>

		<view class="banner" v-show="!isFilterFixed">
			<swiper class="banner-swiper" circular indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff"
		 :autoplay="true" :indicator-dots="true" @change="changeBannerSwiper"
			 :interval="5000" :duration="1000">
				<swiper-item v-for="(item,indx) in banner" :key="indx">
					<view class="swiper-item">
						<image src="http://a3.att.hudong.com/68/61/300000839764127060614318218_950.jpg" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper> 
		</view>
		<!-- 精选资源 -->
		<view class="carefull-choose-title flex-between">
			<view class="flex-start">
				<text class="left-title">精选资源</text>
				<text class="hot-icon">hot</text>
			</view>
			<view class="flex-start">
				<text class="more">更多</text>
				<image class="arrow-r" src="/static/arrow-r.png"></image>
			</view>
		</view>
		<!-- <cart-item mold="t"></cart-item> -->
		
		<view class="cooperate-title" id="cooperate-title" :class="isFilterFixed?'fixed':''">
			合作信息
		</view>
		
		<v-order  
			:currentId="id"
			@showFilter="showFilter"
			@filterFixed="setFilterBarFixed"
			@filterFlow="setFilterBarFlow"
			@switchTypeOrder="changeTypeOrder"
			@switchUpdateOrder="changeUpdateOrder"
			@switchDayWorkOrder="changeDayWorkOrder"
			@switchRegisteOrder="changeRegisteOrder"
		></v-order>

		<cart-item @todetail="toResDetail"></cart-item>


		<toast></toast>
		<button type="primary" @click="hClick()">dianji</button> 
	</view>
</template>

<script>
	import {
		GetBanner
	} from "@/api/index.js"
	import CartItem from "@/components/CarItem/index.vue"
	import Dot from "@/components/Dot/index.vue"
	import Order from "@/components/Order/index.vue" 
	
	let APP = getApp()
	let winWidth = APP.globalData.screenInfo.screenWidth
	let resourceTop = (110*winWidth) / 750
	
	export default {
		components: {
			'cart-item': CartItem,
			'v-dot': Dot,
			'v-order': Order,
			'v-filter':Filter
		},
		data() {
			return {
				isShowFilter:false,
				isFilterFixed:false, // 筛选条是否固定
				banner: ['1', 2, 3, 4],
				// typeOrder: 0, //类型排序 默认综合
				// typeOrderList: ['综合', '线上', '线下', '跨界'], //排序方式
				// updateAndActiveOrder: 0, // 默认最新
				// updateAndActiveOrder: ['最新', '活跃'], // 最新和活跃的排序
				currentBannerSwpier: 0,
				activeTag: 'all',
				options: ['我的1', '资源2', '大厅3', '我的4', '资源5', '资源6'],
				leftRpx: 42,
				currentSwiper: 0,
				id:'',
				currentSwiperContent: 0,
				allResourceTop:0// 合作资源距离顶部的高度
			}
		},
		
		onLoad() {

		},
		onReady() {
			const query = uni.createSelectorQuery().in(this);
			query.select('#res-group').boundingClientRect(data => {
				this.allResourceTop = data.top 
			}).exec();
		},
		onPageScroll(e) {
			if(e.scrollTop >= this.allResourceTop - resourceTop) {
				
			} else {
				
			}
		},
		methods: {
			chooseItem(n) {
				let navLen = this.options.length
				if (n == navLen) {
					return
				}
				this.currentSwiperContent = n + 1
				if (typeof n === 'number' && navLen - n - 1 <= 3) {
					this.currentSwiper = n - 1 > navLen - 3 ? navLen - 3 : n - 1
				}
				if (typeof n === 'number') {
					this.activeTag = 'nav' + n
				} else {
					this.activeTag = n
				}
				switch (n) {
					case 0:
						this.leftRpx = 147;
						this.currentSwiper = 0;
						break;
					case 1:
						this.currentSwiper = 0;
						this.leftRpx = 267;
						break;
					case navLen - 1:
						this.leftRpx = 387;
						break;
					case 'more':
						this.leftRpx = 502;
						break;
					case 'all':
						this.leftRpx = 42;
						break;
					default:
						this.leftRpx = 267;
				}
			},
			// 滑动导航的操作
			changeNavSwiper(e) {
				this.currentSwiper = e.detail.current
				if (this.leftRpx > 42 && this.leftRpx < 502) {
					let nIndex = (this.leftRpx - 147) / 120
					// 当前所在的下标
					let currentActive = this.currentSwiper + nIndex //
					console.log(currentActive)
					this.currentSwiperContent = currentActive + 1
					this.activeTag = 'nav' + currentActive
				}
			},
			// 滑动内容swiper
			changeContentSwiper(e) {
				let current = e.detail.current
				this.currentSwiperContent = current
				this.id = 10
				if (current != 0) {
					this.chooseItem(current - 1)
				} else {
					this.chooseItem('all')
				}
			},
			/**
			 * 显示筛选弹层
			 */
			showFilter(){
				this.isShowFilter = true
			},
			/**
			 * 隐藏筛选弹层
			 */
			hideFilter(){
				this.isShowFilter = false
			},
			// 筛选条固定
			setFilterBarFixed(){
				this.isFilterFixed = true 
			},
			// 筛选条不固定
			setFilterBarFlow(){
				this.isFilterFixed = false
			},
			// 滑动banner
			changeBannerSwiper(e) {
				this.currentBannerSwpier = e.detail.current
			},
			/**
			 * 综合，线上，线下，跨界的筛选
			 */
			changeTypeOrder(data){
				console.log(data)
			},
			/**
			 * 最新和活跃排序筛选
			 */
			changeUpdateOrder(data){
				console.log(data)
			},
			//跳转到详情
			toResDetail(){
				uni.navigateTo({
					url:'/pages/index/resource-detail/resource-detail'
				})
			},
			// 跳转到搜索
			toSearchPage(){
				uni.navigateTo({
					url:'/pages/index/search/search'
				})
			},
			hClick() {
				uni.pageScrollTo({
					duration: 500,
					scrollTop: 0
				})
			}
		}
	}
</script>

<style lang="scss">
	@import './index.scss'
</style>
