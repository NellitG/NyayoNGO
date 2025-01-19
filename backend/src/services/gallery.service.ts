import { Gallery } from '../models/gallery.model.js';
import { collections } from '../utils/db/connectToDb.js';

export async function fetchGallery() {
  const result = await collections.galleries?.find({}).toArray();
  return result;
};

export async function createNewGallery(gallery: Gallery) {
  const result = await collections.galleries?.insertOne(gallery);
  return result;
};
