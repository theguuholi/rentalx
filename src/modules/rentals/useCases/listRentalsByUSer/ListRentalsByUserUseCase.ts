import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListRentalsByUserUseCase {
  constructor(
    @inject("RentalsRepository")
    private rentalRepository: IRentalsRepository
  ) {}
  async execute(user_id: string): Promise<Rental[]> {
    return await this.rentalRepository.findByUserId(user_id);
  }
}
