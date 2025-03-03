/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes
  },
};

module.exports = nextConfig;
