/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [{ hostname: 'miro.medium.com' }],
  },
};

export default nextConfig;
