/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([
	[
		optimizedImages,
		{
			/* config for next-optimized-images */
		},
	],

	{
		reactStrictMode: true,
		images: {
			domains: ['dummyimage.com'],
		},
	},
	// your other plugins here
])
