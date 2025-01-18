import { collections } from '../utils/db/connectToDb.js';

export async function fetchGallery() {
  const result = await collections.galleries?.find({}).toArray();
  return result;
}
