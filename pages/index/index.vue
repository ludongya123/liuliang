<template>
	<view class="container">
		<view class="top-bar">
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
			</view>
			<view class="line" :style="{left: leftRpx+'rpx'}"></view>
		</view>

		<view class="banner">
			<swiper class="banner-swiper" circular :current="currentBannerSwpier" @change="changeBannerSwiper" :autoplay="true"
			 :interval="5000" :duration="1000">
				<swiper-item v-for="(item,indx) in banner" :key="indx">
					<view class="swiper-item">
						<image src="http://a3.att.hudong.com/68/61/300000839764127060614318218_950.jpg" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
			<v-dot class="banner-dot" :len="banner.length" :active="currentBannerSwpier"></v-dot>
		</view>

		<v-filter  
			:currentId="id"
			@switchTypeOrder="changeTypeOrder"
			@switchUpdateOrder="changeUpdateOrder"
			@switchDayWorkOrder="changeDayWorkOrder"
			@switchRegisteOrder="changeRegisteOrder"
		></v-filter>

		<cart-item></cart-item>
		<cart-item mold="t"></cart-item>
		<swiper circular class="swiper-content" @change="changeContentSwiper" :current="currentSwiperContent">
			<swiper-item>
				<view class="swiper-item">全部</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">1</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">2</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">3</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">4</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">5</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">6</view>
			</swiper-item>

		</swiper>

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
	import Filter from "@/components/Filter/index.vue"
	export default {
		components: {
			'cart-item': CartItem,
			'v-dot': Dot,
			'v-filter': Filter
		},
		data() {
			return {
				banner: ['1', 2, 3, 4],
				// typeOrder: 0, //类型排序 默认综合
				// typeOrderList: ['综合', '线上', '线下', '跨界'], //排序方式
				// updateAndActiveOrder: 0, // 默认最新
				// updateAndActiveOrder: ['最新', '活跃'], // 最新和活跃的排序
				currentBannerSwpier: 0,
				activeTag: 'all',
				options: ['我的1', '资源2', '大厅3', '我的4', '资源5', '资源6'],
				leftRpx: 25,
				currentSwiper: 0,
				id:'',
				currentSwiperContent: 0
			}
		},
		onLoad() {

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
						this.leftRpx = 130;
						this.currentSwiper = 0;
						break;
					case 1:
						this.currentSwiper = 0;
						this.leftRpx = 250;
						break;
					case navLen - 1:
						this.leftRpx = 370;
						break;
					case 'more':
						this.leftRpx = 485;
						break;
					case 'all':
						this.leftRpx = 25;
						break;
					default:
						this.leftRpx = 250;
				}
			},
			// 滑动导航的操作
			changeNavSwiper(e) {
				this.currentSwiper = e.detail.current
				if (this.leftRpx > 25 && this.leftRpx < 485) {
					let nIndex = (this.leftRpx - 130) / 120
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
