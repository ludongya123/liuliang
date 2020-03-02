<template>
	<view class="container">
		<view class="top-bar flex-between"> 
			<scroll-view class="scroll-nav" scroll-x scroll-with-animation :scroll-into-view="intoScrollBar">
				<view class="scroll-item" :id="'scroll-item'+index" :class="index==navIndex?'active':''" v-for="(item,index) in tabbarList" :key='index' @click="clickNavBar(index)">{{item}}</view>
			</scroll-view>
			<image @click="toSearchPage" class="search-icon" src="/static/search-index.png"></image>
		</view>

		<view class="banner" >
			<swiper class="banner-swiper" circular indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff"
		 :autoplay="true" :indicator-dots="true"
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
			<view class="flex-start" @click="toFineRes">
				<text class="more">更多</text>
				<image class="arrow-r" src="/static/arrow-r.png"></image>
			</view>
		</view>
		<cart-item mode="t" @todetail="toResDetail" :len="1"></cart-item>
		
		<view class="cooperate-title" > 
			<view class="title"> 合作信息 </view> 
		</view>
		<view class="gap" v-show="isFilterFixed"> </view>
		<v-order  
			id="filter"
			top="110"
			:currentId="id"
			:fixed='isFilterFixed'   
			@switchTypeOrder="changeTypeOrder"
			@switchUpdateOrder="changeUpdateOrder"
			@switchDayWorkOrder="changeDayWorkOrder"
			@switchRegisteOrder="changeRegisteOrder"
		></v-order>

		<cart-item @todetail="toResDetail" :len="10"></cart-item>


		<toast></toast>
		<v-guide page="index" :isShowGuide="showGuide" @hideGuide="hideGuide"></v-guide>
		<v-collect></v-collect>
		<!-- <button type="primary" @click="hClick()">dianji</button> -->
	</view>
</template>

<script>
	import {
		GetBanner
	} from "@/api/index.js"
	import {isHaveShowGuide} from "@/common/js/utils.js"
	
	import CollectTip from '@/components/CollectTip/index.vue'
	import CartItem from "@/components/CarItem/index.vue" 
	import Order from "@/components/Order/index.vue"  
	import Guide from '@/components/Guide/index.vue'
	
	let APP = getApp()
	let winWidth = APP.globalData.screenInfo.screenWidth
	let scrollNavTop = (110*winWidth) / 750 // 顶部导航的高度
	
	export default {
		components: {
			'cart-item': CartItem, 
			'v-order': Order ,
			'v-guide':Guide,
			'v-collect':CollectTip
		},
		data() {
			return {   
				showGuide:false,
				navIndex:0, // 当前的scrollnav下标
				intoScrollBar:'scroll-item0',// 当前滚动到哪个位置
				banner: ['1', 2, 3, 4],
				isFilterFixed:false, // 筛选条是否固定
				// typeOrder: 0, //类型排序 默认综合
				// typeOrderList: ['综合', '线上', '线下', '跨界'], //排序方式
				// updateAndActiveOrder: 0, // 默认最新
				// updateAndActiveOrder: ['最新', '活跃'], // 最新和活跃的排序 
				tabbarList: ['全部','我的1', '资源2', '大厅3', '我的4', '资源5', '资源6','资源7','资源8','资源9'],
				id:'' ,
				filterTop:0
			}
		},
		
		onLoad() { 
			this.showGuide = isHaveShowGuide('index') ? false : true
			if(!isHaveShowGuide('index')) {
				uni.hideTabBar({ })
			}
		},
		onReady() {
			const query = uni.createSelectorQuery().in(this);
			query.select('#filter').boundingClientRect(data => {
				this.filterTop = data.top 
				console.log(this.filterTop)
			}).exec();
		},
		onPageScroll(e) {
			if(e.scrollTop >= this.filterTop - scrollNavTop) {
				this.isFilterFixed = true
			} else {
				this.isFilterFixed = false
			}
		},
		methods: {
			// 关闭引导图
			hideGuide(){
				uni.setStorageSync('isShowGuideIndex',true)
				this.showGuide = false
				uni.showTabBar({ })
			},
			clickNavBar(idx){
				console.log(idx)
				this.intoScrollBar = idx > 0 ? 'scroll-item' + (idx - 1) : 'scroll-item0'
				this.navIndex = idx
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
			//跳转到精选资源
			toFineRes(){
				uni.navigateTo({
					url: '/pages/index/fine-resource/fine-resource' 
				});
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
