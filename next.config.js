/**
 * @type {import("next").NextConfig}
 */

const { withPlugins } = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  swcMinify: true,
  
  async redirects() {
    return [
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/company/nettasec-solutions",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/nettasec",
        permanent: true,
      }
    ];
  },
};

module.exports = withPlugins([withImages], nextConfig);
