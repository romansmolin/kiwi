/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: 'https://kiwi-be.vercel.app/',
    },
    images: {
        domains: ['res.cloudinary.com']
    }
};

export default nextConfig;