import { Request, Response } from 'express';

import { createNewGallery, fetchGallery } from '../services/gallery.service.js';
import { cloudinary } from '../utils/upload/cloudinary.js';
import { addTimeStamps } from '../utils/db/addTimeStamps.js';
import { ExpressError } from '../utils/ExpressError.js';

export const showGallery = async (req: Request, res: Response) => {
  const gallery = await fetchGallery();
  res.status(200).json(gallery);
};

export const createGallery = async (req: Request, res: Response) => {
  const gallery = req.body.event;
  gallery.images = [];

  // upload images to cloudinary
  for (const file of req.files as Express.Multer.File[]) {
    const result = await cloudinary.uploader.upload(file.path, {
      asset_folder: 'Nyayo',
    });
    const imageObject = {
      url: result.secure_url,
      public_id: result.public_id,
    };
    gallery.images.push(imageObject);
  };

  const newGallery = addTimeStamps(gallery);

  const result = await createNewGallery(newGallery);

  if (result?.acknowledged) {
      res.status(201).json({ message: 'Successfully created a new gallery' });
    } else {
      throw new ExpressError('Could not create the gallery', 500);
    }
};
