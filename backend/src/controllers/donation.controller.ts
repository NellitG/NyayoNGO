import express, { Request, Response, NextFunction } from 'express';
import { fetchAllDonations } from '../services/donation.service.js';

export const showAllDonations = async (req: Request, res: Response) => {
  const donations = await fetchAllDonations();
  res.status(200).json(donations)
}