import { Router } from "express";
import multer from "multer";
import { CreateCategoryController } from "../../../../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../../../../modules/cars/useCases/importCategory/CreateCategoryController";
import { ListCategoriesController } from "../../../../modules/cars/useCases/listCategories/ListCategoriesController";

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();
const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

// categoriesRoutes.post("/", (request, response) => {
//   return createCategoryController().handle(request, response);
// });
categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);
categoriesRoutes.get("/", listCategoriesController.handle);

export { categoriesRoutes };
