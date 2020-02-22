<template>
	<view class="wrapper" v-show="show"> 
		<view class="toast" :class="show?'ani':''">
			{{msg}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg: '11',
				show: false,
				timer: null
			}
		},
		mounted() {
			uni.$on('toast', (data) => {
				console.log('监听到事件来自 update ，携带参数 msg 为：' + data.msg);
				if (this.show) {
					this.show = false
					this.msg = ''
					// if (this.timer) {
					// 	clearTimeout(this.timer)
					// 	this.timer = null
					// }
					// // return
				}
				console.log(this.timer)
				setTimeout(()=>{
					this.msg = data.msg
					this.show = true
					// this.timer = setTimeout(() => {
					// 	this.msg = ''
					// 	this.show = false
					// }, 3000)
				},15)
				

			})
		}
	}
</script>

<style scoped lang="scss">
	.wrapper{
		display: flex;
		justify-content: center;
	}
	.toast {  
		text-align: center; 
		position: fixed;
		top: -100px; 
		z-index: 10000;
		background: rgba(0, 0, 0, 0.8);
		color:#fff;
		padding: 10upx 30upx;
		border-radius: 6upx;
		font-size: 28upx; 
		&.ani {
			animation: ani 3s ease;
		}
	}

	@keyframes ani {
		0% {
			top: -100upx;
			opacity: 0;
		}
		10%{
			opacity: 0.5;
		}
		11%{
			opacity: 0.6;
		}
		12%{
			opacity: 0.7;
		}
		13%{
			opacity: 0.8;
		}
		14%{
			opacity: 0.9;
		}
		15% {
			top: 100upx;
			opacity: 1;
		}
		80% { 
			top: 100upx;
			opacity: 1;
		}
		81% {
			top: 100upx;
			opacity: 0.7;
		}
		82% {
			top: 100upx;
			opacity: 0.6;
		}
		83% {
			top: 100upx;
			opacity: 0.5;
		}
		84% {
			opacity: .4;
		}
		95% {
			opacity: 0.5;
		}
		100% {
			top: -100upx;
			opacity: 0;
		}
	}
</style>
