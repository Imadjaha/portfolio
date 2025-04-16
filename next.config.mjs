/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    trailingSlash: true,
    output: 'export', // required for static export (GitHub Pages)
  };
  
  export default nextConfig;
  