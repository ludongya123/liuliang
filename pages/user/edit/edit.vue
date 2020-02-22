<template>
	<view class="edit-container">
		<view class="flex-start edit-item edit-headimg">
			<image class="left-img" src="/static/logo.png"  ></image>
			<text class="center">修改头像</text>
			<image class="right" src="/static/arrow-r.png"  ></image>
		</view>
		<view class="xiline"> </view>
		<view class="flex-start edit-item">
			<text class="left">昵称</text>
			<text class="center active">我的昵称</text>
			<image class="right" src="/static/arrow-r.png"  ></image>
		</view>
		
		<view class="xiline"> </view>
		<view class="flex-start edit-item" @click="showActionSheet">
			<text class="left">性别</text>
			<text class="center" :class="gender!=-1?'active':''">
				{{gender==0?'男':gender==1?'女':'未选择'}}
			</text>
			<image class="right" src="/static/arrow-r.png"  ></image>
		</view>
		<view class="xiline"> </view>
		<view class="flex-start edit-item">
			<text class="left">城市</text>
			<text class="center">杭州</text>
			<image class="right" src="/static/arrow-r.png"  ></image>
		</view>
		<view class="xiline"> </view>
		<view class="flex-start edit-item">
			<text class="left">个人签名</text>
			<text class="center sign active">这是个性签名这是个性签名这是个性签名这是个性签名这是个性签名这是个性签名这是个性签名这是个性签名</text>
			<image class="right" src="/static/arrow-r.png"  ></image>
		</view>
		<action-sheet 
		:isShow="isShowActionsheet"
		:sex="gender"
		@hideActionSheet="hideLayerAction"
		@chooseItem="chooseGender"
		></action-sheet>
	</view>
</template>

<script>
	import ActionSheet from '@/components/ActionSheet/index.vue'
	export default {
		components:{
			ActionSheet
		},
		data() {
			return {
				isShowActionsheet:false,
				gender:-1
			};
		},
		methods:{
			showActionSheet(){
				this.isShowActionsheet = true
			},
			hideLayerAction(){
				this.isShowActionsheet = false
			},
			chooseGender(index){
				this.gender = index
				this.hideLayerAction()
			}
		}
	}
</script>

<style lang="scss">
@import './edit.scss'
</style>
