/** @type {import('next').NextConfig} */
import ESLintPlugin from "eslint-webpack-plugin";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.plugins.push(
        new ESLintPlugin({
          context: "./",
          extensions: ["js", "jsx", "ts", "tsx"],
          exclude: ["node_modules", "dist"],
        })
      );
    }
    return config;
  },
};

export default nextConfig;
