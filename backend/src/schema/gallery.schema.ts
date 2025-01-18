import { z } from 'zod';

export const galleryZodSchema = z.object({
  gallery: z.object({
    title: z
      .string({ required_error: 'Title is required' })
      .min(1, 'Gallery title is required')
      .max(100, 'Title cannot exceed 100 characters'),
    description: z
      .string({ required_error: 'Description is required' })
      .min(1, 'Gallery description is required')
      .max(500, 'Description cannot exceed 500 characters'),
    images: z
      .array(
        z.object({
          url: z
            .string({ required_error: 'A URL is required' })
            .url('A valid image URL is required'),
          public_id: z
            .string({ required_error: 'Public id is required' })
            .min(1, 'Public ID is required'),
        })
      )
      .min(1, 'At least one image is required')
      .max(20, 'You cannot add more than 20 images'),
  }),
});