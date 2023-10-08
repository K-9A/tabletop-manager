// /** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,

//   async headers() {
//     return [
//       {
//         source: '/api/:path*',
//         headers: [
//           { key: 'Cache-Control', value: 'public, max-age=3600' },
//           { key: 'Access-Control-Allow-Credentials', value: 'true' },
//           { key: 'Access-Control-Allow-Origin', value: '*' }, // Adjust this for production
//           { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
//           { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
//         ],
//       },
//     ];
//   },
// };



//Old
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
