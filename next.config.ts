import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        // ВАЖНО: это временное решение для дебага, не для продакшена
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
