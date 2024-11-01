/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/status-page",
  assetPrefix: "/status-page/",
  compiler: {
    styledComponents: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
