<template>
	<view>
		<button type="default" open-type="share" class="share flex-center">
			<image class="share-icon" src="/static/share.png" ></image>
			<text class="share-text">分享</text>
		</button>
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
		<view class="nav-bar flex-center">
			<view class="left">
				<text class="active">资源（6）</text>
			</view>
			<view class="right">
				<text>成员（5）</text> 
			</view>
		</view>
		<view class="friend-list">
			<view class="list-item flex-start" v-for="item in 3">
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
						<view class="focus flex-start" :class="item==1?'ok':item==2?'add-s':''">
							<image  src="/static/hx.png" v-if="item==0"></image>
							<image src="/static/ok.png" v-if="item==1"></image>
							<image src="/static/add-s.png" v-if="item==2"></image>
							<text>互相关注</text>
						</view>
					</view>
					<view class="xiline"> </view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isshowTip:false
			};
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
			}
		}
	}
</script>

<style lang="scss">
@import  './company-detail.scss'
</style>
