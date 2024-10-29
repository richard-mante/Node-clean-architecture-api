import { Request, Response, NextFunction } from "express";

export function ErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500).json({ message: `Internal Serve error: ${err.message}` });
}
