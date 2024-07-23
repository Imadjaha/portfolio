// next.config.mjs
// const isProd = process.env.NODE_ENV === 'production';

// const nextConfig = {
//   assetPrefix: isProd ? '/portfolio/' : '',
//   basePath: isProd ? '/portfolio' : '',
//   trailingSlash: true,
// };

// export default nextConfig;
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;