import express, { Request, Response, NextFunction } from 'express';


export const donationRouter = express.Router({mergeParams: true});

donationRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  res.status(200).json({message: "Donation was a success"});
})