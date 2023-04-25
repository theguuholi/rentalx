import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { Rental } from "../typeorm/entities/Rental";
import { Repository, getRepository } from "typeorm";

interface ICreateRentalDTO {
  car_id: string;
  user_id: string;
  expected_return_date: Date;
}

export class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>;

  constructor() {
    this.repository = getRepository(Rental);
  }
  async create(data: ICreateRentalDTO): Promise<Rental> {
    const rental = await this.repository.create(data);

    this.repository.save(rental);

    return rental;
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    return await this.repository.findOne({ user_id });
  }

  async findByCar(car_id: string): Promise<Rental> {
    return await this.repository.findOne({ car_id });
  }
}
