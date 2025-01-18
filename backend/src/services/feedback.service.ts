import { Feedback } from '../models/feedback.model.js';
import { collections } from '../utils/db/connectToDb.js';

export async function createNewFeedback(feedback: Feedback) {
  
  const result = collections.feedbacks?.insertOne(feedback);
  return result;
}