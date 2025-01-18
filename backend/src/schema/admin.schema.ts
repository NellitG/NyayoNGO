import { z } from 'zod';

export const adminZodSchema = z.object({
  admin: z.object({
    username: z
      .string({ required_error: 'Username is required' })
      .min(1, 'Username cannot be empty'),
    password: z
      .string({ required_error: 'Password is required' })
      .min(1, 'Password is Required'),
  }),
});
