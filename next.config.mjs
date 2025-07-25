/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ubmagerbucket.s3.ap-southeast-1.amazonaws.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
