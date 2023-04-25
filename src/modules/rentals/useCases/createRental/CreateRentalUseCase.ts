import { inject, injectable } from "tsyringe";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { AppError } from "@shared/errors/AppError";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";

interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}

// @injectable()
export class CreateRentalUseCase {
  constructor(
    // @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository,
    private dateProvider: IDateProvider
  ) {}
  async execute(data: IRequest): Promise<Rental> {
    const minHours = 24;
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

    const dateNow = this.dateProvider.dateNow();

    const compare = this.dateProvider.compareInHours(
      dateNow,
      data.expected_return_date
    );

    if (compare < minHours) {
      throw new AppError("You should book for at least 24 hours");
    }

    const rental = await this.rentalsRepository.create(data);
    return rental;
  }
}
