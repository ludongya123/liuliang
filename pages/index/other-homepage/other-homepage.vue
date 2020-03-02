<template>
	<view class="other-cont">
		<button class="share flex-center" open-type="share" v-show="!isSeal">
			<image class="share-icon" src="/static/share.png" mode="aspectFill"></image>
			<text class="share-text">分享</text>
		</button> 
		<view class="title-bar"  v-show="isShowUserNar"> 
			<view class="gap"> </view>
			<view class="flex-start content">
				<image class="title-bar-img" src="/static/logo.png" mode="aspectFill"></image>
				<view class="title-bar-center">
					<view class="flex-start">
						<text class="user-name">郑海星</text>
						<text class="user-state">·刚刚活跃</text>
					</view>
					<view class="flex-start job">
						<image class="sex-icon" src="/static/nan.png" mode="aspectFill"></image>
						<text>网易背景音乐音乐总监</text>
					</view>
				</view> 
			</view> 
		</view>
		<!-- 被封提示 -->
		<view class="notice-bar" v-show="isSeal">
			<!-- <view class="gap"> </view> -->
			<view class="flex-start">
				<image src="/static/th.png"></image>
				<text>该账号已被封禁，请注意您的合作安全！</text>
			</view>
		</view>
		<view class="top"> 
			<view class="head">
				<view class="flex-start">
					<image class="user-img" src="/static/logo-icon.png" mode="aspectFill"></image>
					<view class="user-info">
						<view class="user-name">
							132****3669
						</view>
						<view class="user-uid">
						 <text>UID:13356666</text><text class="time"> · 十分钟前活跃</text>
						</view>
					</view> 
				</view>
				
			</view>
			<view class="user-setting flex-start">
				<view class="flex-center">
					<image class="user-setting-icon" src="/static/sex12.png" mode="aspectFill"></image>
					<text>性别</text>
				</view>
				<view class=" flex-center">
					<image class="user-setting-icon" src="/static/location-g.png" mode="aspectFill"></image>
					<text>所在城市</text>
				</view>
				<view class="flex-center">
					<image class="user-setting-icon" src="/static/brand.png" mode="aspectFill"></image>
					<text>我的品牌</text>
				</view>
				<view class="flex-center">
					<image class="user-setting-icon" src="/static/job.png" mode="aspectFill"></image>
					<text>身份头衔</text>
				</view>
			</view>
			<view class="user-tip">
				这位小伙伴有点酷哦，暂时没有个性签名这位小伙伴有点酷
				哦暂时没有个性签名~
			</view>
			<view class="user-amount flex-between">
				<view class="flex-item">
					<view class="amount">
						100
					</view>
					<view class="text">
						赞与收藏
					</view>
				</view>
				<view class="flex-item">
					<view class="amount">
						10 
					</view>
					<view class="text">
						人脉
					</view>
					
				</view>
				<view class="flex-item">
					<view class="amount ju">
						100
					</view>
					<view class="text">
						举报
					</view>
				</view>
			</view>
		</view> 
		<view class="brand flex-start" @click="toCompany">
			<image class="brand-icon" src="/static/logo.png" mode="aspectFill"></image>
			<view class="brand-info">
				<view class="brand-title">
					网易云音乐
				</view>
				<view class="brand-tag">
					12条合作资源·35发布者丨IT/互联网
				</view>
			</view>
		</view>
		<view class="ta-title">
			TA的资源（10）
		</view>
		<view class="res-group" id="res-group">
			<v-cart :len="5"></v-cart>
		</view>
		
		<view class="handel-area flex-between">
			<view class="flex-center focus">
				<image src="/static/add-s.png" mode="aspectFill"></image>
				<text>关注TA</text>
			</view>
			<view class="flex-center">
				<image src="/static/jl.png" mode="aspectFill"></image>
				<text>交流</text>
			</view>
		</view>
	</view>
</template>

<script>
	import Cart from '@/components/CarItem/index.vue'
	
	let APP = getApp()
	let winWidth = APP.globalData.screenInfo.screenWidth
	let gapUSerHeight = (140*winWidth) / 750
	export default {
		components:{
			'v-cart':Cart
		},
		data() {
			return {
				isSeal:false,// 是否被封
				isShowUserNar:false,
				userResTop:0 // 用户资源距离顶部高度
			};
		},
		onReady() {
			console.log(11111)
			const query = uni.createSelectorQuery().in(this);
			query.select('#res-group').boundingClientRect(data => {
				this.userResTop = data.top 
			}).exec();
		},
		onPageScroll(e) {  
			let h = e.scrollTop 
			if(h >= this.userResTop-gapUSerHeight) {
				this.isShowUserNar = this.isShowUserNar || true
			} else {
				this.isShowUserNar = this.isShowUserNar && false
			}
		},
		methods:{
			toCompany(){
				uni.navigateTo({
					url:'/pages/index/company-detail/company-detail'
				})
			}
		}
	}
</script>

<style lang="scss">
@import  './other-homepage.scss'
</style>
