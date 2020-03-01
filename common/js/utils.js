export const ShowToast = (msg) => {
	uni.$emit('toast',{msg})
}
// 是否已经显示过引导图
export const isHaveShowGuide = (page) => {
	if (page == 'index') { 
		return uni.getStorageSync('isShowGuideIndex') || false
	}
	if(page == 'user') {
		return uni.getStorageSync('isShowGuideUser') || false
	}
}