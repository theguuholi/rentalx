import { container } from "tsyringe";
import { ListCarsUseCase } from "./ListCarsUseCase";

export { Request, Response } from "express";
class ListCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { category_id, brand, name } = request.query;
    const listCategoriesUseCase = container.resolve(ListCarsUseCase);
    const all = await listCategoriesUseCase.execute({
      category_id: category_id as string,
      brand: brand as string,
      name: name as string,
    });
    return response.json(all);
  }
}

export { ListCarsController };
