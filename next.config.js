const nextTranslate = require("next-translate-plugin");

/** @type {import('next').NextConfig} */
module.exports = nextTranslate({
    experimental: { appDir: true },
    env: {
        API_URL: 'https://kiwi-be.vercel.app/',
    },
    images: {
        domains: ['res.cloudinary.com', 'flowbite.s3.amazonaws.com']
    },
  });