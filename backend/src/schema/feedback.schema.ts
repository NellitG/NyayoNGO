import { z } from 'zod';

export const feedbackZodSchema = z.object({
  feedback: z.object({
    name: z
      .string({ required_error: 'Name is required' })
      .min(1, 'Name cannot be empty')
      .max(100, 'Name cannot exceed 100 characters'),
    email: z
      .string({ required_error: 'Email is required' })
      .email('Invalid email address')
      .max(100, 'Email cannot exceed 100 characters'),
    phoneNumber: z
      .string({ required_error: 'Phone number is required' })
      .min(10, 'Phone number must be at least 10 digits')
      .max(10, 'Phone number cannot exceed 10 digits')
      .regex(/^\d+$/, 'Phone number can only contain numeric digits'),
    message: z
      .string({ message: 'Message is required' })
      .min(1, 'Message cannot be empty')
      .max(1000, 'Message cannot exceed 1000 characters'),
  }),
});