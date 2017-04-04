/**
 * @fileOverview API模块
 * @module api
 * @function request(method, [params])	请求天气接口
 */

const { protocol, host, version, key, dataProp, STATUS } = require('./config')
const axios = require('axios')

let _joinUrl = (...items) => {
	return items.join('')
}
let _isSuccess = (status) => {
	return status === STATUS.SUCCESS
}
let _getData = (response) => {
	return response[dataProp][0]
}

/**
 * @param  {String} method 具体接口名称
 * @param  {Object} params 参数对象
 * @return {Promise}
 */
let _request = (method, params) => {
	if (typeof method === 'undefined')
		console.log('param method is undefined')

	let url = _joinUrl(protocol, host, version, method)

	Object.assign(params, { key })

	return new Promise((resolve, reject) => {
		axios
			.get(url, { params })
			.then((response) => {
				let data = _getData(response.data)

				if (_isSuccess(data.status)) {
					resolve(data)
				} else {
					reject(data)
				}
			})
			.catch((error) => {
				reject(error)
			})
	})
}

module.exports = {
	request: _request
}