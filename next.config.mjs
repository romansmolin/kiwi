/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: 'https://kiwi-be.vercel.app/',
    },
    images: {
        domains: ['res.cloudinary.com', 'flowbite.s3.amazonaws.com']
    }
};

export default nextConfig;