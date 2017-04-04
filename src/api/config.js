/**
 * @fileOverview 和风天气API配置
 * @module config
 * @description 和风天气API配置
 * 		token需要申请 https://www.heweather.com
 * 		[api status](https://www.heweather.com/documents/status-code)
 * 			ok									数据正常
 *			invalid key					错误的key
 *			unknown city				未知或错误城市
 *			no more requests		超过访问次数
 *			param invalid				参数错误
 *			vip over						付费账号过期
 *			anr									无响应或超时
 *			permission denied		无访问权限，如免费key强制获取付费数据或获取未购买的付费数据
 */

const { token } = require('./he-token')

module.exports = {
	protocol: 'https://',
	host: 'free-api.heweather.com/',
	version: 'v5/',
	key: token,
	// 所有接口数据都在'HeWarther5'字段里
	dataProp: 'HeWeather5',
	STATUS: {
		SUCCESS: 'ok',
		INVALID_KEY: 'invalid key',
		UNKNOWN_CITY: 'unknown city',
		NO_MORE_REQUESTS: 'no more requests',
		PARAM_INVALID: 'param invalid',
		VIP_OVER: 'vip over',
		ANR: 'anr',
		PERMISSION_DENIED: 'permission denied'
	}
}