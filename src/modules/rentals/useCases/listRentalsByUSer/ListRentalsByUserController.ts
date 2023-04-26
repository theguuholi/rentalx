import { container } from "tsyringe";
import { ListRentalsByUserUseCase } from "./ListRentalsByUserUseCase";

export { Request, Response } from "express";
class ListRentalsByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const listRentalsByUserUseCase = container.resolve(
      ListRentalsByUserUseCase
    );
    const rental = await listRentalsByUserUseCase.execute(user_id);
    return response.status(200).json(rental);
  }
}

export { ListRentalsByUserController };
