import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "../IRentalsRepository";

class RentalsRepositoryInMemory implements IRentalsRepository {
  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    throw new Error("Method not implemented.");
  }
  async findByCar(car_id: string): Promise<Rental> {
    throw new Error("Method not implemented.");
  }
}

export { RentalsRepositoryInMemory };
