<template>
	<view class="detail-cont">
		<view class="title-bar flex-start">
			<image class="title-bar-img" src="/static/logo.png" mode="aspectFill"></image>
			<view class="title-bar-center">
				<view class="flex-start">
					<text class="user-name">郑海星</text>
					<text class="user-state">·刚刚活跃</text>
				</view>
				<view class="flex-start job">
					<image class="sex-icon" src="/static/nan.png"></image>
					<text>网易背景音乐音乐总监</text>
				</view>
			</view>
			<button type="default" open-type="contact">关注</button>
			<image class="share-icon" src="/static/share.png"></image>
		</view>
		<!-- banner -->
		<swiper class="swiper" circular :indicator-dots="true" indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff"
		 :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in img" :key="index">
				<view class="swiper-item">
					<image :src="item" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 资源简介 -->
		<view class="res-summary">
			<view class="brand flex-start">
				<image class="brand-icon" src="/static/logo.png" mode="aspectFill"></image>
				<view class="brand-info">
					<view class="flex-between">
						<text class="brand-name">品牌名称</text>
						<text class="brand-count">1.2万/5.3万</text>
					</view>
					<view class="flex-between">
						<text class="brand-trade">IT/互联网 · 音乐/视频/阅读</text>
						<text class="tag">日活/注册</text>
					</view>
				</view>
			</view>

			<view class="period-validity flex-start">
				<image src="/static/time.png"></image>
				<text>有效期：2020年08月02日前有效</text>
			</view>
			<view class="flex-start res-tags">
				<text>曝光标签</text>
				<text>曝光标签</text>
				<text>曝光标签2</text>
			</view>
			<view class="res-title">
				简洁精要资源标题 例如：提供XX资源，寻找XX资源合作
			</view>
			<view class="xiline"></view>

			<view class="flex-start res-time">
				<view class="time">
					2019.08.02 16:24:36
				</view>
				<view class="flex-start">
					<image src="/static/exchange.png"></image>
					<text>采量</text>
				</view>
				<view class="flex-start">
					<image src="/static/eye.png"></image>
					<text>11111</text>
				</view>
			</view>
		</view>
		<!-- 我需要，我提供，合作吧 -->
		<view class="nav-bar flex-around" :class="isFixed?'fixed':''" id="nav-bar">
			<text :class="activeIdx==1?'active':''" @click="scrollPage(myNeedTop,1)">我需要</text>
			<text :class="activeIdx==2?'active':''" @click="scrollPage(myProvideTop,2)">我提供</text>
			<text :class="activeIdx==3?'active':''" @click="scrollPage(myCooperateTop,3)">合作吧</text>
		</view>
		<view class="place-height" style="height: 80rpx;" v-show="isFixed">

		</view>
		<view class="my-need" id="my-need">
			我需要
		</view>
		<view class="my-provide" id="my-provide">
			我提供
		</view>
		<view class="my-cooperate" id="my-cooperate">
			合作吧
		</view>
	</view>
</template>

<script>
	let APP = getApp()
	let winWidth = APP.globalData.screenInfo.screenWidth
	let h = (80 * winWidth) / 750  // 固定的顶部的不同分辨率的高度
	console.log(h)
	export default {
		data() {
			return {
				isFixed: false,
				navBarTop: 0,
				myNeedTop: 0,
				myProvideTop: 0,
				myCooperateTop: 0,
				activeIdx: 1,
				img: ['http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg',
					'http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg'
				]
			}
		},
		onLoad() {

		},
		onReady() {
			const query = uni.createSelectorQuery().in(this);
			query.select('#nav-bar').boundingClientRect(data => {
				this.navBarTop = data.top
			}).exec();
			query.select('#my-need').boundingClientRect(data => { 
				this.myNeedTop = data.top
			}).exec();
			query.select('#my-provide').boundingClientRect(data => {
				this.myProvideTop = data.top
			}).exec();
			query.select('#my-cooperate').boundingClientRect(data => {
				this.myCooperateTop = data.top
			}).exec();
		},
		onPageScroll(e) {
			console.log(e.scrollTop)
			if (e.scrollTop >= this.navBarTop) {
				this.isFixed = this.isFixed || true
				if(e.scrollTop < this.myProvideTop-h) {
					this.activeIdx = 1
				}
				if(e.scrollTop < this.myCooperateTop-h && e.scrollTop >= this.myProvideTop-h) {
					this.activeIdx = 2
				}
				if(e.scrollTop >= this.myCooperateTop-h){
					this.activeIdx = 3
				}
			} else {
				this.isFixed = this.isFixed && false
			}
		},
		methods: {
			scrollPage(top,index) { 
				// this.activeIdx = index
				console.log(top - h)
				uni.pageScrollTo({
					duration: 500,
					scrollTop: top - h 
				})
			}
		}
	}
</script>

<style lang="scss">
	@import './resourceDetail.scss'
</style>
