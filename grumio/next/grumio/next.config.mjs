/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    eslint: { 
        ignoreDuringBuilds: true, 
      }, 
    async rewrites() {
        return [
        {
            source: '/grumio/:path*',
            destination: 'http://localhost:8080/grumio/:path*',
        },
        ]
    },
    
};

  

export default nextConfig;

