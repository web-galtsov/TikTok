import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '49tjom56',
  dataset: 'production',
  apiVersion: '2022-07-20',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
