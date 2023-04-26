import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { Rental } from "../typeorm/entities/Rental";
import { Repository, getRepository } from "typeorm";

interface ICreateRentalDTO {
  car_id: string;
  user_id: string;
  expected_return_date: Date;
  id?: string;
  end_date?: string;
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
    return await this.repository.findOne({
      where: {
        user_id,
        end_date: null,
      },
    });
  }

  async findByCar(car_id: string): Promise<Rental> {
    return await this.repository.findOne({
      where: {
        car_id,
        end_date: null,
      },
    });
  }

  async findByID(id: string): Promise<Rental> {
    return await this.repository.findOne(id);
  }

  async findByUserId(user_id: string): Promise<Rental[]> {
    return await this.repository.find({ 
      where: {
        user_id
      },
      relations: ["car"]
     });
  }
}
