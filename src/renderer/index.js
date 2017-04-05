/**
 * @fileOverview 渲染器
 */

module.exports = (bundle, template) => {
	return require('vue-server-renderer').createBundleRenderer(bundle, { template })
}