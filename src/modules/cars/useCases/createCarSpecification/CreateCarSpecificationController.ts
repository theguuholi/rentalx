import { container } from "tsyringe";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecification";

export { Request, Response } from "express";
class CreateCarSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { specifications_id } = request.body;

    const createCarSpecificationUseCase = container.resolve(
      CreateCarSpecificationUseCase
    );
    const car = await createCarSpecificationUseCase.execute({
      car_id: id,
      specifications_id,
    });

    return response.json(car);
  }
}

export { CreateCarSpecificationController };
