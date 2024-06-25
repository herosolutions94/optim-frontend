/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['127.0.0.1', '127.0.0.1:8000']
    // remotePatterns: [
    //   {
    //     protocol: process.env.PROTOCOL,
    //     hostname: process.env.HOSTNAME,
    //     pathname: process.env.IMAGE_REMOTE_PATTERNS_PATHANME,

    //     // protocol: 'https',
    //     // hostname: 'herosolutions.com.pk',
    //     // pathname: '/naeem/machinery-hub/**',
    //   },
    // ],
  },
  reactStrictMode: true,
};

export default nextConfig;
