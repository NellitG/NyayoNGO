import { z } from 'zod';

export const galleryZodSchema = z.object({
  title: z
    .string()
    .min(1, "Gallery title is required")
    .max(100, "Title cannot exceed 100 characters"),
  description: z
    .string()
    .min(1, "Gallery description is required")
    .max(500, "Description cannot exceed 500 characters"),
  images: z
    .array(
      z.object({
        url: z.string().url("A valid image URL is required"),
        public_id: z.string().min(1, "Public ID is required"),
      })
    )
    .min(1, "At least one image is required")
    .max(20, "You cannot add more than 20 images"),
});