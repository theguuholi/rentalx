import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateCategoryController";

const specificationsRoutes = Router();
const specificationRepository = SpecificationRepository.getInstance();

const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.post("/", createSpecificationController.handle);

specificationsRoutes.get("/", (request, response) => {
  const all = specificationRepository.list();
  return response.json(all);
});

export { specificationsRoutes };
