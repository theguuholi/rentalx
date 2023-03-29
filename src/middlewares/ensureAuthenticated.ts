import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepositories } from "../modules/accounts/repositories/implementations/UsersRepositories";

interface IPayload {
  sub: string;
}
export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return new Error("Token missin");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "84a26c4612a7f9958174ee6552625282"
    ) as IPayload;

    const usersRepository = new UsersRepositories();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exist!");
    }

    request.user = {
      id: user_id
    }

    next();
  } catch (error) {
    throw new AppError("Invalid token");
  }
}
