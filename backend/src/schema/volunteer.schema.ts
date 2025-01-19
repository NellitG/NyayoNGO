import { z } from 'zod';

export const volunteerZodSchema = z.object({
  volunteer: z.object({
    fullName: z
      .string({ required_error: 'Full name is required' })
      .min(1, 'Full name cannot be empty')
      .max(100, 'Full name cannot exceed 100 characters'),
    email: z
      .string({ required_error: 'Email addres is required' })
      .email('Invalid email address')
      .max(100, 'Email cannot exceed 100 characters'),
    phoneNumber: z
      .string({ required_error: 'Phone number is required' })
      .min(10, 'Phone number must be at least 10 digits')
      .max(10, 'Phone number cannot exceed 10 digits')
      .regex(/^\d+$/, 'Phone number can only contain numeric digits'),
    motivation: z
      .string({ required_error: 'Motivation for joining is required' })
      .min(1, 'Motivation message cannot be empty')
      .max(1000, 'Motivation message cannot exceed 1000 characters'),
  }),
});