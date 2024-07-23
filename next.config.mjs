// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/portfolio/' : '',
  basePath: isProd ? '/portfolio' : '',
  trailingSlash: true,
};

export default nextConfig;
