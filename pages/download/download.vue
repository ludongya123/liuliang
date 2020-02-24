<template>
	<view>
		下载
		<button type="primary" @click="close()">关闭</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onShow() {
			uni.hideTabBar({
				
			})
		},
		methods: {
			close(){
				uni.switchTab({
					url:'/pages/index/index',
					success() {
						uni.showTabBar({
							
						})
					}
				})
			}
		}
	}
</script>

<style>

</style>
