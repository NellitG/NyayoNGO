export interface Event {
  title: string;
  description: string;
  date: Date;
  location: string;
  images: { url: string; public_id: string }[];
}

import { z } from 'zod';

export const eventZodSchema = z.object({
  title: z
    .string()
    .min(1, 'Event title is required')
    .max(150, 'Event title should not exceed 150 characters'),
  description: z
    .string()
    .min(1, 'Event description is required')
    .max(1000, 'Event description should not exceed 1000 characters'),
  date: z.preprocess(
    (arg) =>
      typeof arg === 'string' || arg instanceof Date ? new Date(arg) : null,
    z
      .date({ required_error: 'A valid event date is required' })
      .refine((date) => date > new Date(), 'Event date must be in the future')
  ),
  location: z
    .string()
    .min(1, { message: 'Event location is required' })
    .max(200, { message: 'Event location should not exceed 200 characters' }),
  images: z
    .array(
      z.object({
        url: z.string().url('Each image URL must be valid'),
        public_id: z.string().min(1, 'Each image must have a public ID'),
      })
    )
    .min(1, 'At least one image poster is required for the event'),
});
