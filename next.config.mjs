// next.config.mjs
// const isProd = process.env.NODE_ENV === 'production';

// const nextConfig = {
//   assetPrefix: isProd ? '/portfolio/' : '',
//   basePath: isProd ? '/portfolio' : '',
//   trailingSlash: true,
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ihre bestehenden Konfigurationen
  output: 'export',
};

export default nextConfig;
