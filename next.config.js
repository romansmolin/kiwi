/** @type {import('next').NextConfig} */
module.exports = {
    env: {
        API_URL: "https://kiwi-be.vercel.app/",
        CLIENT_URL: "https://kiwi-animations.com/",
    },
    images: {
        domains: ["res.cloudinary.com", "flowbite.s3.amazonaws.com"],
    },
};
