import createImageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from '../env'; 
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || ''
});

export const urlFor = (source:SanityImageSource) => {
  return source ? builder.image(source).url() : 'Missing Sanity projectId or dataset. Check your environment variables.';
};
