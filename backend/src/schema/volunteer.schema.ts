import { z } from 'zod';

export const volunteerZodSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .max(100, "Full name cannot exceed 100 characters"),
  email: z
    .string()
    .email("A valid email address is required")
    .max(100, "Email cannot exceed 100 characters"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number cannot exceed 10 digits")
    .regex(/^\d+$/, "Phone number can only contain numeric digits"),
  motivation: z
    .string()
    .min(1, "Motivation message is required")
    .max(1000, "Motivation message cannot exceed 1000 characters"),
});