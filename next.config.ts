import type { NextConfig } from "next";
import { createCivicAuthPlugin } from "@civic/auth-web3/nextjs";
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.pexels.com', "lh3.googleusercontent.com", "avatars.githubusercontent.com"],
  },
};
const withCivicAuth = createCivicAuthPlugin({
  clientId: process.env.CIVIC_ID!,
});

export default withCivicAuth(nextConfig);
