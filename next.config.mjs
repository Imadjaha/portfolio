const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  trailingSlash: true,
  output: 'export', // Keep this for GitHub Pages

  // Disable image optimization in static export mode for GitHub Pages
  images: {
    unoptimized: process.env.NODE_ENV === 'production' && process.env.VERCEL_ENV === undefined,
  },
};

export default nextConfig;
