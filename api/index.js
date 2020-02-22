import http from './http.js'

export const GetBanner = (data = {}) => {
	return http({
		url: '/auctionapi/AppCategory/GetCategoryInfos',
		data: data
	}).post()
}
