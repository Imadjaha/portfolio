/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/portfolio/' : '',
  basePath: isProd ? '/portfolio' : '',
  trailingSlash: true,
};
