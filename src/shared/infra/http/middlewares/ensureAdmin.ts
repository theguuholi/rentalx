import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../../../errors/AppError";
import { UsersRepositories } from "../../../../modules/accounts/infra/typeorm/repositories/UsersRepositories";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;
  const usersRepository = new UsersRepositories();
  const user = await usersRepository.findById(id);

  if (!user.isAdmin) {
    throw new AppError("USer is not admin!");
  }
  return next();
}
