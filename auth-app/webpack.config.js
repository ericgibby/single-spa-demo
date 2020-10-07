const webpackMerge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const { DefinePlugin } = require('webpack');

module.exports = webpackConfigEnv => {
	const defaultConfig = singleSpaDefaults({
		orgName: 'ericgibby',
		projectName: 'auth-app',
		webpackConfigEnv
	});

	return webpackMerge.smart(defaultConfig, {
		// modify the webpack config however you'd like to by adding to this object
		externals: ['shared-components'],
		plugins: [
			new DefinePlugin({
				'process.env.OAUTH_CLIENT_ID': JSON.stringify(process.env.OAUTH_CLIENT_ID || '')
			})
		]
	});
};
