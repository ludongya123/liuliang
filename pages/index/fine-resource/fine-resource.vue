<template>
	<view class="fine-cont">
		<view class="tip">
			正在浏览 全部精选资源
		</view>
		<v-filter :fixed="true" top="52"></v-filter>
		<v-card mode="t" :len="10"></v-card>
	</view>
</template>

<script>
	import Filter from'@/components/Order/index.vue'
	import CardItem from '@/components/CarItem/index.vue'
	export default {
		components:{
			'v-filter':Filter,
			'v-card':CardItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
@import './fine-resource.scss'
</style>
