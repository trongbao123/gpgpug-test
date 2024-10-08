/** @type {import('next').NextConfig} */
import { join } from "path";
import Path from "path";
const nextConfig = {
    sassOptions: {
        includePaths: [Path.join("styles")],
    },
    images: { unoptimized: true },
    swcMinify: true,
    // output: "export",
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;
