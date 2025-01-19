import { Subscriber } from '../models/subscriber.model.js';
import { collections } from '../utils/db/connectToDb.js';

export async function createSubscriber(subscriber: Subscriber) {
  const result = await collections.subscribers?.insertOne(subscriber);
  return result;
}