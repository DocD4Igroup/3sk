/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true, // 🔧 Detta är nyckeln!
    },
    output: 'export',

};

export default nextConfig;
