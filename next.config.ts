// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos', // Bu satır çok önemli!
        port: '',
        pathname: '/**',
      },
      // Eğer placehold.co'yu tamamen kaldırdıysan, onunla ilgili satırları silebilirsin.
      // Eğer hala bir yerde kullanıyorsan, o da burada kalmalı:
      // {
      //   protocol: 'https',
      //   hostname: 'placehold.co',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
};

export default nextConfig;