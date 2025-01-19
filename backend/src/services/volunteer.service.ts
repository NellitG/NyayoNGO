import { Volunteer } from '../models/volunteer.model.js';
import { collections } from '../utils/db/connectToDb.js';

export async function registerNewVolunteer(volunteer: Volunteer) {
  const result = await collections.volunteers?.insertOne(volunteer);
  return result;
};

export async function fetchAllVolunteers() {
  const result = await collections.volunteers?.find({}).toArray();
  return result;
}