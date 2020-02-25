<template> 
	<view class="search-cont">
		<view class="search-bar flex-between">
			<view class="search-left flex-start">
				<image  src="/static/search.png"></image>
				<input class="input" type="text" v-model="searchVal" placeholder="搜关键词找合作" placeholder-style="font-size:26rpx;color:#999"/>
				<image src="/static/delete.png"></image>
			</view>
			<text class="cancel">取消</text>
		</view>
		<view class="history">
			<view class="title flex-between">
				<text>历史记录</text>
				<image src="/static/clear.png"></image>
			</view>
			<view class="flex-start record">
				<text>记录1</text>
				<text>记录1记录1记录1</text>
				<text>记录1记录1</text>
				<text>记录1记录1</text>
			</view>
		</view>
		
		<view class="hot">
			<view class="title">
				热门搜索
			</view>
			<view class="flex-start hot-group">
				<view class="hot-item flex-start" v-for="item in 8">
					<text class="order">1</text>
					<text class="hot-kw">微信公众号流量</text>
				</view> 
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
@import  './search.scss'
</style>
