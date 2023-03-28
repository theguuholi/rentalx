import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();
const specificationRepository = SpecificationRepository.getInstance();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request,response)
});

specificationsRoutes.get("/", (request, response) => {
  const all = specificationRepository.list();
  return response.json(all);
});

export { specificationsRoutes };
