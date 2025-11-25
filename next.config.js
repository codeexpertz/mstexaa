/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

async headers() {
  return [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Permissions-Policy",
          value: "accelerometer=(), autoplay=(), camera=(), gyroscope=(), magnetometer=(), microphone=(), usb=(), payment=*",
        },
      ],
    },
  ];
}

};

module.exports = nextConfig;
