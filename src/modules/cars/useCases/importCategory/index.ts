import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ImportCategoryController } from "./CreateCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoryRepository = null;
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);

const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export {importCategoryController}