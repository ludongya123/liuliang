<template>
	<view class="edit-container">
		<view class="flex-start edit-item ">
			<image class="left-img" src="/static/logo.png" @click="chooseHeadImg"></image>
			<text class="center edit-headimg" @click="chooseHeadImg" v-show="isAuthUserInfo">修改头像</text>
			<button type="default" class="edit-headimg" v-show="!isAuthUserInfo" open-type="getUserInfo" @getuserinfo="getUserInfo($event,1)">修改头像</button>
			<image class="right" src="/static/arrow-r.png"></image>
		</view>
		<view class="xiline"> </view>
		<view class="flex-start edit-item">
			<text class="left">昵称</text>
			<text class="center" :class="nickname==''?'':'active'" v-show="isAuthUserInfo" @click="toEditNickname">{{nickname || '请输入昵称'}}</text>
			<button type="default" :class="nickname==''?'':'active'" v-show="!isAuthUserInfo" open-type="getUserInfo" @getuserinfo="getUserInfo($event,2)">{{nickname || '请输入昵称'}}</button>
			<image class="right" src="/static/arrow-r.png"></image>
		</view>

		<view class="xiline"> </view>
		<view class="flex-start edit-item">
			<text class="left">性别</text>
			<text class="center" :class="gender!=-1?'active':''" @click="showActionSheet" v-show="isAuthUserInfo">
				{{gender==0?'男':gender==1?'女':'未选择'}}
			</text>
			<button type="default" :class="gender!=-1?'active':''" v-show="!isAuthUserInfo" open-type="getUserInfo" @getuserinfo="getUserInfo($event,3)">{{gender==0?'男':gender==1?'女':'未选择'}}</button>
			<image class="right" src="/static/arrow-r.png"></image>
		</view>
		<view class="xiline"> </view>
		<view class="flex-start edit-item">
			<text class="left">城市</text>
			<text class="center" :class="city!=''?'active':''" v-show="isAuthUserInfo" @click="toEditAddress">{{city||'请完善位置信息'}}</text>
			<button type="default" :class="city!=''?'active':''" v-show="!isAuthUserInfo" open-type="getUserInfo" @getuserinfo="getUserInfo($event,4)">{{city||'请完善位置信息'}}</button>
			<image class="right" src="/static/arrow-r.png"></image>
		</view>
		<view class="xiline"> </view>
		<view class="flex-start edit-item" @click="toEditInstro">
			<text class="left">个人签名</text>
			<text class="center sign" :class="instruction==''?'':'active'">{{instruction||'添加个人描述，让大家更好的认识你~'}}</text>
			<image class="right" src="/static/arrow-r.png"></image>
		</view>
		<action-sheet :isShow="isShowActionsheet" :sex="gender" @hideActionSheet="hideLayerAction" @chooseItem="chooseGender"></action-sheet>
		<view class="submit">
			确定
		</view>
	</view>
</template>

<script>
	import ActionSheet from '@/components/ActionSheet/index.vue'
	export default {
		components: {
			ActionSheet
		},
		data() {
			return {
				isAuthUserInfo: true, // 是否授权用户信息
				isShowActionsheet: false, // 是否显示性别选择框
				gender: -1, // 性别默认
				nickname: '',
				city: '',
				instruction:''
			};
		},
		methods: {
			// 显示性别选择弹窗
			showActionSheet() {
				this.isShowActionsheet = true
			},
			// 隐藏性别选择弹窗
			hideLayerAction() {
				this.isShowActionsheet = false
			},
			// 选择性别
			chooseGender(index) {
				this.gender = index
				this.hideLayerAction()
			},

			// 授权获取用户信息
			getUserInfo(e, i) {
				if (e.detail.errMsg === "getUserInfo:ok") {
					// 授权成功
					this.isAuthUserInfo = true
				} else {
					//授权失败 
					switch (i) {
						case 1:
							this.chooseHeadImg();
							break;
						case 2:
							this.toEditNickname();
							break;
						case 3:
							this.isShowActionsheet = true;
							break;
						case 4:
							this.toEditAddress();
							break;
					}
				}
			},
			// 选择头像
			chooseHeadImg() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: function(res) {
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			},
			// 跳转修改昵称
			toEditNickname() {
				uni.navigateTo({
					url: '/pages/user/edit-nickname/edit-nickname?nickname='+this.nickname
				})
			},
			// 跳转修改地址
			toEditAddress() {
				uni.navigateTo({
					url: '/pages/user/select-address/select-address'
				})
			},
			// 编辑个人说明
			toEditInstro(){
				uni.navigateTo({
					url: '/pages/user/self-intru/self-intru?instro='+this.instruction
				})
			}
		}
	}
</script>

<style lang="scss">
	@import './edit.scss'
</style>
