import svg from '@neodx/svg/webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        svg({
          root: 'src/shared/ui/icon/assets',
          output: 'public',
          metadata: 'src/shared/ui/icon/sprite.gen.ts',
          resetColors: {
            replaceUnknown: 'currentColor',
          },
        }),
      );
    }
    return config;
  },
};

export default nextConfig;
