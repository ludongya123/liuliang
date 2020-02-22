export const ShowToast = (msg) => {
	uni.$emit('toast',{msg})
}