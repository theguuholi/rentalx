import { container } from "tsyringe";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export { Request, Response } from "express";
class ListCategoriesController {
    
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)
    const all = await listCategoriesUseCase.execute()
    return response.json(all);
  }
}

export { ListCategoriesController };
