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
					<text >网易背景音乐音乐总监</text>
				</view>
			</view>
			<button type="default" open-type="contact">关注</button>
			<image class="share-icon" src="/static/share.png"></image>
		</view>
		<!-- banner -->
		<swiper class="swiper" circular :indicator-dots="true" indicator-color="rgba(255,255,255,0.5)"	indicator-active-color="#fff" :autoplay="true" :interval="3000" :duration="1000">
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
				<image src="/static/time.png" ></image>
				<text>有效期：2020年08月02日前有效</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img:['http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg','http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg']
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
@import  './resourceDetail.scss'
</style>
