/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
         {
               protocol:'https',
            hostname:'www.themealdb.com'
         }
        ]
    },
     async redirects() {
    return [
      // Basic redirect
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
  
    ]
  },
};

export default nextConfig;
