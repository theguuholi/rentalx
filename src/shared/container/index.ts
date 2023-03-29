import { container } from "tsyringe";
import { UsersRepositories } from "../../modules/accounts/repositories/implementations/UsersRepositories";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ICategoryRepository } from "../../modules/cars/repositories/ICategoryRepository";
import { CategoryRepository } from "../../modules/cars/repositories/implementations/CategoryRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificationRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository";

container.registerSingleton<ICategoryRepository>("CategoryRepository", CategoryRepository)
container.registerSingleton<ISpecificationRepository>("SpecificationRepository", SpecificationRepository)
container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepositories)