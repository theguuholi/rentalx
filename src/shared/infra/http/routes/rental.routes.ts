import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { ReturnCarController } from "@modules/rentals/useCases/returnCar/ReturnCarController";

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const returnCarController = new ReturnCarController();

rentalRoutes.post("/", ensureAuthenticated, createRentalController.handle);
rentalRoutes.post("/return/:id", ensureAuthenticated, returnCarController.handle);

export { rentalRoutes };
