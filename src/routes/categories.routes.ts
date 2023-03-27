import { Router } from "express";
import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request,response)
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.json(all);
});

export { categoriesRoutes };
