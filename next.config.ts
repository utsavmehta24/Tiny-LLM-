// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactStrictMode: true,
// };

// export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // enable strict React mode
  reactStrictMode: true,

  // allow builds to succeed even if there are ESLint warnings/errors
  eslint: {
    ignoreDuringBuilds: true,
  },

  // permit external image domains (e.g., avatars)
  images: {
    domains: ['i.pravatar.cc'],
  },
};

export default nextConfig;
