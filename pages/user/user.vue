<template>
	<view class="user-container">
		<view class="top">
			
			<view class="download-bar flex-between" v-show="showDownLoad">
				<text>下载APP限时领取VIP会员特权~</text>
				<button type="primary" open-type="contact">立即获取</button>
				<image @click="hideDownLoad" src="/static/close.png" ></image>
			</view>
			
			
			<view class="head">
				<view class="flex-start">
					<image class="user-img" src="/static/logo-icon.png" ></image>
					<view class="user-info">
						<view class="user-name">
							132****3669
						</view>
						<view class="user-uid">
						 <text>UID:13356666</text> <text>昵称:咖啡不加糖</text>
						</view>
					</view> 
				</view>
				<button class="share flex-center" type="default" open-type="share">
					<image class="share-icon" src="/static/share.png" ></image>
					<text class="share-text">分享</text>
				</button>
			</view>
			<view class="user-setting flex-start">
				<view class="flex-center">
					<image class="user-setting-icon" src="/static/sex12.png" ></image>
					<text>性别</text>
				</view>
				<view class=" flex-center">
					<image class="user-setting-icon" src="/static/location-g.png" ></image>
					<text>所在城市</text>
				</view>
				<view class="flex-center">
					<image class="user-setting-icon" src="/static/brand.png" ></image>
					<text>我的品牌</text>
				</view>
				<view class="flex-center">
					<image class="user-setting-icon" src="/static/job.png" ></image>
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
						<text class="dot"></text>
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
		
		<view class="menu">
			<view class="flex-start" @click="navTo(item.url)" v-for="(item,index) in menu" :key="index">
				<image class="menu-icon" :src="item.icon"></image>
				<view class="menu-item">
					<view class="flex-between">
						<text v-if="index!=1">{{item.text}}</text>
						<button  type="default" open-type="contact" v-if="index==1">{{item.text}}</button>
						<image src="/static/arrow-r.png"></image>
					</view>
					<view class="xiline" v-if="index!=3"> </view>
				</view>
			</view> 
		</view>
		<view class="tip">
			VIP客服在线时间：工作日9:30至18:30
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showDownLoad:true,
				menu:[
					{text:'编辑资料',icon:'/static/edit-icon.png',url:'/pages/user/edit/edit'},
					{text:'VIP客服',icon:'/static/kf.png',url:''},
					{text:'意见反馈',icon:'/static/fk.png',url:'/pages/user/feed-back/feed-back'},
					{text:'关于我们',icon:'/static/about.png',url:'/pages/user/about/about'},
					]
			}
		},
		methods: {
			hideDownLoad(){
				this.showDownLoad = false
			},
			navTo(url){
				console.log(url)
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style lang="scss" >
@import './user.scss'
</style>
