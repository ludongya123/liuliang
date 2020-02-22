const host = "http://api.wanbaog.com"

class Http {
	constructor(params) {
		this.params = params
	}
}

Http.prototype = {
	constructor: Http,

	request: function(type) {
		return new Promise((resolve, reject) => {
			var time = new Date().getTime()
			uni.request({
				url: host + this.params.url,
				method: type,
				data: this.params.data,
				timeout: 1
			}).then(res => {
				// this.request(type) 
				resolve(res[1])
			})
		})
	},

	get: function() {
		return this.request('get')
	},

	post: function() {
		return this.request('post')
	}
}

export default (params) => {
	return new Http(params)
}
