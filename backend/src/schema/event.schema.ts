export interface Event {
  title: string;
  description: string;
  date: Date;
  location: string;
  images: { url: string; public_id: string }[];
}

import { z } from 'zod';

export const eventZodSchema = z.object({
  event: z.object({
    title: z
      .string({ required_error: 'Title is required' })
      .min(1, 'Event title cannot be an empty')
      .max(150, 'Event title should not exceed 150 characters'),
    description: z
      .string({ required_error: 'Description is required' })
      .min(1, 'Event description cannot be empty')
      .max(1000, 'Event description should not exceed 1000 characters'),
    date: z.preprocess(
      (arg) =>
        typeof arg === 'string' || arg instanceof Date ? new Date(arg) : null,
      z
        .date({ required_error: 'A valid event date is required' })
        .refine((date) => date > new Date(), 'Event date must be in the future')
    ),
    location: z
      .string({ required_error: 'Event location is required' })
      .min(1, { message: 'Event location cannot be empty' })
      .max(200, { message: 'Event location should not exceed 200 characters' }),
    images: z
      .array(
        z.object({
          url: z
            .string({ required_error: 'Image URL is required' })
            .url('Each image URL must be valid'),
          public_id: z
            .string({ required_error: 'Image public_id is required' })
            .min(1, 'Each image must have a public ID'),
        })
      )
      .min(1, 'At least one image poster is required for the event'),
  }),
});
