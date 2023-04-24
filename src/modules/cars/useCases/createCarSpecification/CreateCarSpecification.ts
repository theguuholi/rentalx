import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  car_id: string;
  specifications_id: string[];
}

@injectable()
class CreateCarSpecificationUseCase {
  constructor(
    @inject("CarsRepository") private carsRespository: ICarsRepository,
    @inject("SpecificationRepository") private specificationRepository: ISpecificationRepository

  ) {}
  async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
    const carExists = await this.carsRespository.findById(car_id);

    if (!carExists) {
      throw new AppError("Car does not exist!");
    }

    const specifications = await this.specificationRepository.findByIds(specifications_id)

    carExists.specifications = specifications;
    await this.carsRespository.create(carExists)
    return carExists;
  }
}

export { CreateCarSpecificationUseCase };