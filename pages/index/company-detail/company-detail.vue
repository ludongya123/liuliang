<template>
	<view>
		<button type="default" open-type="share" class="share flex-center">
			<image class="share-icon" src="/static/share.png" ></image>
			<text class="share-text">分享</text>
		</button>
		<view class="gap" v-show="isNavFixed"> </view>
		<view class="banner">
			<image class="banner-img" src="http://a3.att.hudong.com/68/61/300000839764127060614318218_950.jpg" mode="aspectFill"></image>
			<view class="compony-info flex-start">
				<image src="/static/logo.png" class="comp-logo" mode="aspectFill"></image>
				<view class="comp-title">
					<view class="flex-start">
						<text class="comp-name">网易云音乐</text>
						<view class="hz flex-center">
							<image class="hz-icon" src="/static/hz.png"></image>
							<text>1000</text>
						</view>
						<view class="help">
							<image src="/static/help.png" @click="showTip()"></image>
							<view class="point-out" v-show="isshowTip"> 
								该品牌历史意向合作总数
							</view>
						</view>
					</view>
					<view class="tip flex-start">
						<image src="/static/bg.png" ></image>
						<text>IT/互联网 · 音乐/视频/阅读</text>
					</view>
				</view>
			</view>
		</view>
		<view class="nav-bar flex-center" :class="isNavFixed?'fixed':''">
			<view class="left" @click="switchActiveNav(1)">
				<text :class="active==1?'active':''">资源（6）</text>
			</view>
			<view class="right" @click="switchActiveNav(2)">
				<text :class="active==2?'active':''">成员（5）</text> 
			</view>
		</view>
		<view class="res-group" v-show="active==1">
			<v-card :len="10"></v-card>
		</view>
		<view class="friend-list" v-show="active==2">
			<view class="list-item flex-start" v-for="item in 10">
				<image class="list-item-img" src="/static/logo.png" mode="aspectFill"></image>
				<view class="list-item-right">
					<view class="user-info flex-between">
						<view class="user-info-content">
							<view class="user-name flex-start">
								<text class="nickname">用户昵称</text>
								<image class="vip-icon" src="/static/card-vip.png" ></image>
							</view>
							<view class="tip">
								商务总监·3分钟前活跃
							</view>
						</view> 
						<view class="focus flex-center" :class="item==1?'ok':item==2?'add-s':''">
							<image  src="/static/hx.png" v-if="item==0"></image>
							<image src="/static/ok-s.png" v-if="item==1"></image>
							<image src="/static/add-s.png" v-if="item==2"></image>
							<text>{{item==0?'互相关注':item==1?'已关注':'关注'}}</text>
						</view>
					</view>
					<view class="xiline"> </view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	let APP = getApp()
	let winWidth = APP.globalData.screenInfo.screenWidth
	let tabHeight = (460*winWidth) / 750 // tabbar距离顶部的距离
	
	import CardItem from '@/components/CarItem/index.vue'
	
	export default {
		components:{
			'v-card':CardItem
		},
		data() {
			return {
				isshowTip:false,
				isNavFixed:false ,// tabbar是否吸顶
				active:1
			};
		},
		onPageScroll(e) {
			if(e.scrollTop >= tabHeight) {
				this.isNavFixed = this.isNavFixed || true
			} else {
				this.isNavFixed = this.isNavFixed && false
			}
		},
		methods:{
			showTip(){
				if(this.isshowTip) {
					return
				}
				this.isshowTip = true
				setTimeout(()=>{
					this.isshowTip = false
				},3000)
			},
			switchActiveNav(n){
				this.active = n
			}
		}
	}
</script>

<style lang="scss">
@import  './company-detail.scss'
</style>
