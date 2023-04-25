import { inject, injectable } from "tsyringe";

import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}

// @injectable()
export class CreateRentalUseCase {
  constructor(
    // @inject("RentalsRepository") 
    private rentalsRepository: IRentalsRepository
  ) {}
  async execute(data: IRequest): Promise<Rental> {
    const carunAvailable = await this.rentalsRepository.findByCar(data.car_id);

    if (carunAvailable) {
      throw new AppError("Car is unavailable");
    }

    const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(
      data.user_id
    );

    if (rentalOpenToUser) {
      throw new AppError("A user already booked a car");
    }

    const rental = await this.rentalsRepository.create(data);
    return rental;
  }
}
