import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoryRepository.getInstance()
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)

export {listCategoriesController}