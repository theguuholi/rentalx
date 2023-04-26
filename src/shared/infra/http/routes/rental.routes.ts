import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { ReturnCarController } from "@modules/rentals/useCases/returnCar/ReturnCarController";
import { ListRentalsByUserController } from "@modules/rentals/useCases/listRentalsByUSer/ListRentalsByUserController";

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const returnCarController = new ReturnCarController();

rentalRoutes.post("/", ensureAuthenticated, createRentalController.handle);

rentalRoutes.get(
  "/user",
  ensureAuthenticated,
  new ListRentalsByUserController().handle
);

rentalRoutes.post(
  "/return/:id",
  ensureAuthenticated,
  returnCarController.handle
);

export { rentalRoutes };
