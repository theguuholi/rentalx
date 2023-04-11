import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "../ICarsRepository";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

class CarsRepositoryInMemory implements ICarsRepository {

  cars: Car[] = [];

  async create(data: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, data);
    this.cars.push(car);
    return car
  }

  async findByLicensePlate(license_plate: String): Promise<Car> {
    return this.cars.find((car) => car.license_plate === license_plate)
  }
}

export { CarsRepositoryInMemory };
