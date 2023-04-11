import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";
import { usersRouters } from "./users.routes";
import { carsRoutes } from "./cars.routes";

const router = Router()

router.use("/cars", carsRoutes)
router.use("/categories", categoriesRoutes)
router.use("/specifications", specificationsRoutes)
router.use("/users", usersRouters)
router.use(authenticateRoutes)

export {router};