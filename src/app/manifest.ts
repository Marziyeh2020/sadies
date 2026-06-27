import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SADIES | Luxury Alterations & Tailoring',
    short_name: 'SADIES',
    description: 'Expert craftsmanship, luxury tailoring, bridal alterations, and menswear fittings located in Clayton, MO.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/asset/logo1.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/asset/logo1.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
