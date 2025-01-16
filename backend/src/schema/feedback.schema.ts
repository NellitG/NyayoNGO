import { z } from 'zod';

export const feedbackZodSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name cannot exceed 100 characters"),
  email: z
    .string()
    .email("A valid email address is required")
    .max(100, "Email cannot exceed 100 characters"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number cannot exceed 10 digits")
    .regex(/^\d+$/, "Phone number can only contain numeric digits"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message cannot exceed 1000 characters"),
});