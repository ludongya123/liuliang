<template>
	<view>
		<view class="top">
			<view class="title"> 
				<view class="title-top"> 所在城市</view>

				<view class="tag">
					您选择的城市，将作为智能AI为您推荐的重要依据
				</view>
				<view class="tip">
					最多可选1个城市
				</view>
			</view> 
			<view class="sub-title">
				当前定位
			</view>
			<view class="flex-start location">
				<view class="flex-center btn">
					<image src="/static/location-a.png"></image>
					<text>点击定位</text>
				</view>
				<view class="flex-center res">
					<image src="/static/location-f.png"></image>
					<text>杭州市</text>
				</view> 
			</view>
			<view class="sub-title">
				热门标签
			</view>
			<view class="address-list flex-start">
				<text class="text-btn" v-for="(item,index) in hot" :key="index">{{item}}</text>
			</view>
		</view>
		<view class="btm">
			<view class="sub-title flex-between">
				<text>全部地区</text>
				<view class="flex-start">
					<image src="/static/arrow-l.png"></image>
					<text class="right">杭州</text>
				</view>
			</view>
			<view class="address-list flex-start">
				<text class="text-btn" v-for="(item,index) in hot" :key="index">{{item}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hot:['全国','杭州','北京','上海','广州','深圳','苏州']
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
@import  './select-address.scss'
</style>
