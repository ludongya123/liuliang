<script>
	export default {
		globalData: {
			screenInfo: {} // 屏幕信息
		},
		onLaunch: function() {
			let that = this
			uni.getSystemInfo({
				success(e) {
					console.log(e)
					console.log(that)
					that.globalData.screenInfo = e
					// let time = setInterval(() => {
					// 	if (getApp().globalData) {
					// 		getApp().globalData.screenInfo = e
					// 		clearInterval(time)
					// 	}
					// }, 10)
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/css/common.css';
</style>
