module.expots = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exlude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
};
