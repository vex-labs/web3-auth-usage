/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // Do not add WEB3AUTH_CLIENT_ID here to keep it server-side only
  },
};

module.exports = nextConfig;
