import { z } from 'zod';
// to be updated later
export const donationZodSchema = z.object({
  donation: z.object({
    donorName: z
      .string({ required_error: 'Donor name is required' })
      .min(1, 'Donor name cannot be empty')
      .max(100, 'Donor name cannot exceed 100 characters'),
    donorEmail: z
      .string({ required_error: 'Donor email address is required' })
      .email('A valid donor email is required')
      .max(100, 'Donor email cannot exceed 100 characters'),
    amount: z
      .number({ required_error: 'Donation amount is required' })
      .min(1, 'Donation amount must be at least 1')
      .max(1_000_000, 'Donation amount cannot exceed 1,000,000'),
    phoneNumber: z
      .string({ required_error: 'Donor phoneNumber is required' })
      .min(10, 'Phone number must be at least 10 digits')
      .max(10, 'Phone number cannot exceed 10 digits')
      .regex(/^\d+$/, 'Phone number can only contain numeric digits'),
  }),
});
