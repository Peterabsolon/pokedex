/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: '/',
        destination: '/pokemons',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
