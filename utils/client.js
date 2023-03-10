import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';

export const client = sanityClient( {
    projectId: 'j188mrk8',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,/*élesben át kell állítani*/ 
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
} );

const builder = imageBuilder(client);
export const urlForImage = ( source ) => builder.image(source);