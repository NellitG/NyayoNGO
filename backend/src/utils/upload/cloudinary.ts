import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import config from 'config';

// configure cloudinary
cloudinary.config({
  cloud_name: config.get<string>('cloudinary.cloud_name'),
  api_key: config.get<string>('cloudinary.api_key'),
  api_secret: config.get<string>('cloudinary.api_secret'),
});

const storage = multer.diskStorage({ destination: '/tmp/uploads' });

export { cloudinary, storage };
