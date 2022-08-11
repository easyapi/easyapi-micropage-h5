// const baseUrl = 'https://doc-api.easyapi.com';
const baseUrl = 'https://shop-api.huakaiwanyi.com';

export function request(url, method, data, header) {
	let requestMethod = method.toUpperCase() || "GET";
	let requestData = data || {};
	let requestHeader = header || {
		'content-type': 'application/json'
	};
	var promise = new Promise(function(resolve, reject) {
		let token = uni.getStorageSync('authenticationToken');
		if (token) {
			requestHeader['Authorization'] = 'Bearer ' + token
		}
		let pathUrl = baseUrl + url
		uni.request({
			url: pathUrl,
			data: requestData,
			method: requestMethod,
			dataType: "json",
			header: requestHeader,
			success: function(res) {
				resolve(res)
			},
			fail: function(error) {
				console.log(error)
				reject
			}
		})
	});
	return promise;
};
