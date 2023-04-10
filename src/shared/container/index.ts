import { container } from "tsyringe";
import { UsersRepositories } from "../../modules/accounts/infra/typeorm/repositories/UsersRepositories";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ICategoryRepository } from "../../modules/cars/repositories/ICategoryRepository";
import { CategoryRepository } from "../../modules/cars/infra/typeorm/repositories/CategoryRepository";
// import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificationRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository";
import { SpecificationRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationRepository";

container.registerSingleton<ICategoryRepository>("CategoryRepository", CategoryRepository)
container.registerSingleton<ISpecificationRepository>("SpecificationRepository", SpecificationRepository)
container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepositories)