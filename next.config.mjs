import withPWA from "next-pwa";
import mdx from "@next/mdx";
import { compose } from "next-compose-plugins";

const withMDX = mdx({
  extension: /\.mdx?$/,
});

const pwaConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

export default compose([withMDX, pwaConfig], {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "mdx"],
});
