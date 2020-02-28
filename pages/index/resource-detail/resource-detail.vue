<template>
	<view class="detail-cont">
		<view class="gap"> </view>
		<view class="title-bar flex-start">
			<image class="title-bar-img" src="/static/logo.png" mode="aspectFill" @click="toOtherHomePage"></image>
			<view class="title-bar-center"  @click="toOtherHomePage">
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
			<image class="share-icon" src="/static/share-black.png"></image>
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
		<view class="nav-bar flex-around" :class="isFixed?'fixed':''"  id="nav-bar">
			<text :class="activeIdx==1?'active':''" @click="scrollPage(myNeedTop,1)">我需要</text>
			<text :class="activeIdx==2?'active':''" @click="scrollPage(myProvideTop,2)">我提供</text>
			<text :class="activeIdx==3?'active':''" @click="scrollPage(myCooperateTop,3)">合作吧</text>
		</view>
		<!-- 吸顶占位 -->
		<view class="place-height" style="height: 80rpx;" v-show="isFixed"> </view>
		<view class="my-need" id="my-need"> 
			<view class="title-panel">
				我需要
			</view>
			<!-- 投放预算 -->
			<view class="group-item budget">
				<view class="sub-title">
					投放预算
				</view>
				<view class="flex-between budget-content">
					<view class="min-val">
						最低值（万）
					</view>
					<text>-</text>
					<view class="max-val">
						最低值（万）
					</view>
				</view>
			</view>
			<!-- 每日导量 -->
			<view class="group-item input-count">
				<view class="sub-title">
					每日导量
				</view>
				<view class="flex-between input-count-content">
					<view class="min-val">
						最低值（万）
					</view>
					<text>-</text>
					<view class="max-val">
						最高值（万）
					</view>
				</view>
			</view>
			<!-- 换量比例 -->
			<view class="group-item exchange">
				<view class="sub-title">
					换量比例
				</view>
				<view class="flex-between exchange-content">
					<view class="flex-start left">
						<image src="/static/user.png"></image>
						<text class="target">发布者</text>
						<text class="number">1</text>
					</view>
					<text>:</text>
					<view class="flex-start right">
						<text class="number">1</text>
						<text class="target">合作方</text>
						<image src="/static/hz.png"></image> 
					</view>
				</view>
			</view>
			<!-- 行业地区 -->
			<view class="group-item industry-area">
				<view class="sub-title">
					行业地区
				</view>
				<view class="flex-start industry">
					<text>行业一</text>
					<text>行业2</text>
					<text>行业3</text>
					<text>行业4</text>
				</view>
				<view class="flex-start area">
					<text>地区1</text>
					<text>地区2</text>
				</view>
			</view>
			<!-- 资源类型 -->
			<view class="group-item resource-type">
				<view class="sub-title">
					资源类型
				</view>
				<view class="flex-start resource-type-content">
					<text>类型1</text>
					<text>类型2</text>
					<text>类型3</text>
					<text>类型4</text>
				</view>
			</view>
			<!-- 用户画像 -->
			<view class="group-item user-portrait">
				<view class="sub-title">
					用户画像
				</view>
				<view class="flex-between user-portrait-content">
					<view class="girl flex-start">
						<image class="sex-img" src="/static/girl.png"></image>
						<image class="sex-icon" src="/static/sex2.png" ></image>
						<text>--%</text>
					</view>
					
					<view class="boy flex-end"> 
						<image class="sex-icon" src="/static/sex1.png" ></image>
						<text>--%</text>
						<image class="sex-img" src="/static/boy.png"></image>
					</view>
				</view>
				<view class="flex-between age">
					<view class="age-val">
						最小年龄（岁）
					</view>
					<text>-</text>
					<view class="age-val">
						最高年龄（岁）
					</view>
				</view>
				<view class="flex-start colony" >
					<text>群体1</text>
					<text>群体1</text>
					<text>群体1</text>
					<text>群体1</text>
				</view>
			</view>
			<view class="group-item resource-detail">
				<view class="sub-title">
					详细描述
				</view>
				<view class="detail-content">
					
				</view>
			</view>
		</view>
		
		<!-- 我提供 -->
		<view class="my-provide" id="my-provide">
			<view class="title-panel">
				我提供
			</view>
			<!-- 每日导量 -->
			<view class="group-item input-count">
				<view class="sub-title">
					每日导量
				</view>
				<view class="flex-between input-count-content myprovide">
					<view class="min-val">
						最低值（万）
					</view>
					<text>-</text>
					<view class="max-val">
						最高值（万）
					</view>
				</view>
			</view>
			<!-- 投放预算 -->
			<view class="group-item budget">
				<view class="sub-title">
					投放预算
				</view>
				<view class="flex-between budget-content myprovide">
					<view class="min-val">
						最低值（万）
					</view>
					<text>-</text>
					<view class="max-val">
						最高值（万）
					</view>
				</view>
			</view>
			<!-- 资源类型 -->
			<view class="group-item resource-type">
				<view class="sub-title">
					资源类型
				</view>
				<view class="flex-start resource-type-content">
					<text>类型1</text>
					<text>类型2</text>
					<text>类型3</text>
					<text>类型4</text>
				</view>
			</view>
			<!-- 广告位置 -->
			<view class="group-item ad">
				<view class="sub-title">
					广告位置
				</view>
				<view class="flex-start ad-content">
					<text>位置1</text>
					<text>位置2</text> 
				</view>
			</view>
			<!-- 用户画像 -->
			<view class="group-item user-portrait">
				<view class="sub-title">
					用户画像
				</view>
				<view class="flex-between user-portrait-content">
					<view class="girl flex-start">
						<image class="sex-img" src="/static/girl.png"></image>
						<image class="sex-icon" src="/static/sex2.png" ></image>
						<text>--%</text>
					</view>
					
					<view class="boy flex-end"> 
						<image class="sex-icon" src="/static/sex1.png" ></image>
						<text>--%</text>
						<image class="sex-img" src="/static/boy.png"></image>
					</view>
				</view>
				<view class="flex-between age">
					<view class="age-val">
						最小年龄（岁）
					</view>
					<text>-</text>
					<view class="age-val">
						最高年龄（岁）
					</view>
				</view>
				<view class="flex-start colony" >
					<text>群体1</text>
					<text>群体1</text>
					<text>群体1</text>
					<text>群体1</text>
				</view>
			</view>
			<!-- 详细描述 -->
			<view class="group-item resource-detail">
				<view class="sub-title">
					详细描述
				</view>
				<view class="detail-content">
					
				</view>
			</view>
		</view>
		<view class="my-cooperate" id="my-cooperate">
			<view class="title-panel">
				合作吧
			</view>
			
			<!-- 结算方式 -->
			<view class="group-item settle-accounts">
				<view class="sub-title">
					结算方式
				</view>
				<view class="flex-start settle-accounts-content">
					<text>方式1</text>
					<text>方式2</text>
					<text>方式3</text>
					<text>方式4</text>
				</view>
			</view>
			<!-- 结算方式 -->
			<view class="group-item payment">
				<view class="sub-title">
					付费方式
				</view>
				<view class="flex-start payment-content">
					<text>方式1</text>
					<text>方式2</text> 
				</view>
			</view>
			<!-- 渠道测试 -->
			<view class="group-item channel-test">
				<view class="sub-title">
					渠道测试
				</view>
				<view class="flex-start channel-test-content">
					<text>可商议</text>  
				</view>
			</view>
			<!-- 产品体验 -->
			<view class="group-item product-experience ">
				<view class="sub-title">
					产品体验
				</view>
				<view class="product-experience-content">
					<image src="/static/code.png"></image>
					  <view class="tip">
					  	长按识别二维码(或微信扫描)
					  </view>
				</view>
			</view>
		</view>
		
		
		<view class="footer flex-between">
			<view class="notice">
				<image src="/static/notice.png" ></image>
				<view class="count">
					100
				</view>
			</view>
			<view class="sc">
				<image src="/static/sc.png" ></image>
				<view class="count">
					100
				</view>
			</view>
			<view class="zan">
				<image src="/static/zan.png" ></image>
				<view class="count">
					100
				</view>
			</view>
			<view class="btn flex-center">
				<image src="/static/jl.png"></image>
				<text>立即沟通</text>
			</view>
		</view>
	</view>
</template>

<script>
	let APP = getApp()
	let winWidth = APP.globalData.screenInfo.screenWidth 
	let h = (220 * winWidth) / 750  // 固定的tabbar顶部的不同分辨率的高度
	console.log(h)
	export default {
		data() {
			return {
				isFixed: false, // 导航栏的固定
				titleFixed:false,// 顶部关注分享条的固定
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
			console.log(e.scrollTop,this.navBarTop)
			if (e.scrollTop >= this.navBarTop - (140 * winWidth) / 750) {
				this.isFixed = this.isFixed || true 
				if(e.scrollTop >= this.myCooperateTop-h){
					this.activeIdx = 3
				} else if (e.scrollTop >= this.myProvideTop-h) {
					this.activeIdx = 2
				} else {
					this.activeIdx = 1
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
					scrollTop: top - h + 2
				})
			},
			toOtherHomePage(){
				uni.navigateTo({
					url:'/pages/index/other-homepage/other-homepage'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import './resource-detail.scss'
</style>
