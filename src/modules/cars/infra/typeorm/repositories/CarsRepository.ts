import { getRepository, Repository } from "typeorm";
import { Category } from "../entities/Category";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { Car } from "../entities/Car";
import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create(data: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create(data);
    this.repository.save(car);
    return car;
  }
  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({ license_plate });
    return car;
  }
}

export { CarsRepository };