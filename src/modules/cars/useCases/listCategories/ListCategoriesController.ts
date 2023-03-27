import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export { Request, Response } from "express";
class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase){}
    
  handle(request: Request, response: Response) {
    const all = this.listCategoriesUseCase.execute()
    return response.json(all);
  }
}

export { ListCategoriesController };
