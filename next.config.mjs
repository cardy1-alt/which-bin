/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // make sure the serif fonts used by the /share og-image route are included
    // in that serverless function's bundle on vercel.
    outputFileTracingIncludes: {
      "/share": ["./app/share/serif.ttf", "./app/share/serif-bold.ttf"],
    },
  },
};

export default nextConfig;
