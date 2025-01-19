import { Request, Response } from 'express';
import { fetchGallery } from '../services/gallery.service.js';

export const showGallery = async (req: Request, res: Response) => {
  const gallery = await fetchGallery();
  res.status(200).json(gallery);
};
