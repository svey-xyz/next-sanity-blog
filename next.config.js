/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		serverActions: true // Add,
	},
	images: {
		domains: ["cdn.sanity.io", "api.sanity.io"]
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [{ loader: '@svgr/webpack', options: { icon: true } }]
		})
		return config
	},
}

module.exports = nextConfig
