import { z } from 'zod';

export const donationZodSchema = z.object({
  donorName: z
    .string()
    .min(1, "Donor name is required")
    .max(100, "Donor name cannot exceed 100 characters"),
  donorEmail: z
    .string()
    .email("A valid donor email is required")
    .max(100, "Donor email cannot exceed 100 characters"),
  amount: z
    .number()
    .min(1, "Donation amount must be at least 1")
    .max(1_000_000, "Donation amount cannot exceed 1,000,000"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number cannot exceed 10 digits")
    .regex(/^\d+$/, "Phone number can only contain numeric digits"),
});
