module.exports = {
	rootDir: 'src',
	transform: {
		'^.+\\.(j|t)sx?$': 'ts-jest'
	},
	moduleNameMapper: {
		'\\.(css)$': 'identity-obj-proxy',
		'^shared-components$': require.resolve('shared-components/dist/shared-components.umd.development.js')
	},
	setupFilesAfterEnv: ['../../node_modules/@testing-library/jest-dom/dist/index.js']
};
