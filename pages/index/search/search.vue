<template> 
	<view class="search-cont">
		<view class="search-bar flex-between">
			<view class="search-left flex-start">
				<image  src="/static/search.png"></image>
				<input class="input" placeholder="搜关键词找合作" placeholder-style="font-size:26rpx;color:#999" confirm-type="search" type="text" @confirm="toSearch" v-model="searchVal" />
				<image src="/static/delete.png" style="padding:15rpx;margin-right: -10rpx;" v-show="isShowSearchlayer" @click="deleteVal"></image>
			</view>
			<text class="cancel" >取消</text>
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
		
		<view class="search-layer" v-show="isShowSearchlayer">
			<view class="search-item" v-for="item in 20">
				<view class="search-res">
					美妆1
				</view>
				<view class="xiline"> </view>
			</view>
		</view>
		
		
		<v-order
			:currentId="1"
			@switchTypeOrder="changeTypeOrder"
			@switchUpdateOrder="changeUpdateOrder"
			@switchDayWorkOrder="changeDayWorkOrder"
			@switchRegisteOrder="changeRegisteOrder"
		></v-order>
	</view>
	
</template>

<script>
	import Order from '@/components/Order/index.vue'
	export default {
		components:{
			'v-order':Order
		},
		data() {
			return {
				searchVal:'',
				isShowSearchlayer:false
			};
		},
		watch:{
			searchVal(v){
				if(v.trim() !== '') {
					this.isShowSearchlayer = this.isShowSearchlayer ||  true
				} else {
					this.isShowSearchlayer = this.isShowSearchlayer && false
				}
			}
		},
		methods:{
			deleteVal(){
				this.searchVal = ''
			},
			toSearch(e){
				console.log(e,'-------')
			}
		}
	}
</script>

<style lang="scss">
@import  './search.scss'
</style>
