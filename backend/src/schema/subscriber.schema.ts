import { z } from 'zod';

export const subscriberZodSchema = z.object({
  email: z
    .string()
    .email("A valid email address is required")
    .max(100, "Email cannot exceed 100 characters"),
});