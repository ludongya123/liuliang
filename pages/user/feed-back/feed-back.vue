<template>
	<view class="feedback-cont">
		<view class="textarea">
			<textarea v-model="val" placeholder="请填写10字以上的问题或产品建议，以便我们为您提供更好的帮助~~" placeholder-style="font-size:26rpx;font-weight:400;line-height:40rpx;color:#7D7D7D; "
			 maxlength="200" auto-focus /> </textarea>
			<view class="count">{{val.length}}/200</view>
		</view>
		<view class="title">
			添加图片（选填）{{imgs.length}}/3
		</view>
		<view class="flex-start btm">
			<view class="img-item" v-for="(item,index) in imgs" :key="index">
				<image class="img" @click="bigImg(index)" :src="item" mode="aspectFill"></image>
				<image class="delete" src="/static/jq.png" @click="deleteImg(index)"></image>
			</view> 
			<view class="img-item"  v-show="imgLen<3"  >
				<image class="img" @click="chooseImg" src="/static/add.png" mode=""></image>
			</view>
		</view>
		<view class="submit"  >提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				val: '',
				imgs:[],
				imgLen:0
			}
		},
		methods: {
			chooseImg(){
				var that = this
				uni.chooseImage({
					count:3-this.imgs.length,
					sizeType:['compressed'],
					success(res){
						const tempFilePaths = res.tempFilePaths
						console.log(tempFilePaths)
						that.imgs = [...that.imgs,...tempFilePaths] 
						that.imgLen = that.imgs.length
					}
				})
			},
			deleteImg(index){
				let imgs = this.imgs
				imgs.splice(index,1)
				this.imgs = imgs
				this.imgLen = imgs.length
			},
			bigImg(index){
				uni.previewImage({
					urls:[this.imgs[index]],
					current:this.imgs[index]
				})
			}
		}
	}
</script>

<style lang="scss">
	@import './feed-back.scss'
</style>
