import {
    BASE_PATH
  } from './next.constants.mjs';  

/** @type {import('next').NextConfig} */
const nextConfig = {
  // We allow the BASE_PATH to be overridden in case that the Website
  // is being built on a subdirectory (e.g. /nodejs-website)
  basePath: BASE_PATH,
  env: {
    APP_ENVIRONMENT: 'localhost'
    // TODO: IF YOU HAVE A VALUE HERE, IT WILL OVERRIDE THE VALUE IN NETLIFY ENV VARS. BACKWARDS? We want a value on local but different on netlify
    //MY_CLIENT_ID: 'from next.config.mjs' 
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.dog.ceo',
      },
    ],
  },  
  // *** What can you do here? ***
  logging: {
    fetches: {
      fullUrl: true, // TODO: WHAT IS THIS FOR?
    }
  },
  // *** Configure Redirects ***
  // https://nextjs.org/docs/app/api-reference/next-config-js/redirects
  async redirects() {
    return [
      {
        source: '/whereami',
        destination: '/geolocation',
        permanent: true,
      },
    ]
  },  
  // *** Configure Rewrites ***
  // https://nextjs.org/docs/app/api-reference/next-config-js/rewrites
  async rewrites() {
    return [
      {
        source: '/findme',
        destination: '/geolocation',
      },
    ]
  },  
};

/*
Example - https://github.com/nodejs/nodejs.org/blob/main/next.config.mjs
*/
export default nextConfig;
