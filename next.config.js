/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      // Default headers for all routes
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
      // Allow iframe embedding ONLY on these two routes
      {
        source: '/trading-tools',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'frame-ancestors https://my.gtcvip.com',
          },
        ],
      },
      {
        source: '/market-overview',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'frame-ancestors https://my.gtcvip.com',
          },
        ],
      },
    ];
  },
  transpilePackages: ['@gtcfx-frontend/gtcfx-frontend'],
  webpack: (config) => {
    config.resolve.extensionAlias = {
      ".js": [".ts", ".tsx", ".js", ".jsx"],
      ".mjs": [".mts", ".mjs"],
      ".cjs": [".cts", ".cjs"],
    };
    config.resolve.alias.canvas = false;
    return config;
  },
  images: {
    domains: ['gtcfx-bucket.s3.ap-southeast-1.amazonaws.com'],
  },
};

module.exports = nextConfig;
