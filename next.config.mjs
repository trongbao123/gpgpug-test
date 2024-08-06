/** @type {import('next').NextConfig} */
import { join } from "path";
import Path from "path";
const nextConfig = {
    sassOptions: {
        includePaths: [Path.join("styles")],
    },
    images: { loader: "gpgpu-front", domain: "gpgpu-front.netlify.app" },
    swcMinify: true,
};

export default nextConfig;
