/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['images.unsplash.com',
  'wembleypark.com']
  }
}
//it's necessary to add the hostname in the image configuration and restart the app to make it work
module.exports = nextConfig
