import { container } from "tsyringe";
import { ReturnCarUseCase } from "./ReturnCarUseCase";

export { Request, Response } from "express";
class ReturnCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { id: user_id } = request.user;
    const returnCarUseCase = container.resolve(ReturnCarUseCase);
    const rental = await returnCarUseCase.execute({
      id,
      user_id,
    });
    return response.status(200).json(rental);
  }
}

export { ReturnCarController };
