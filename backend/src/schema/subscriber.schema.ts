import { z } from 'zod';

export const subscriberZodSchema = z.object({
  subscriber: z.object({
    email: z
      .string({ required_error: 'Email address is required' })
      .email('A valid email address is required')
      .max(100, 'Email cannot exceed 100 characters'),
  }),
});