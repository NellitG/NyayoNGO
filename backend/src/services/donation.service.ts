import { collections } from '../utils/db/connectToDb.js';

export async function fetchAllDonations() {
  const result = await collections.donations?.find({}).toArray();
  return result;
}