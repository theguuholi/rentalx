import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
  user_id: string;
}

@injectable()
export class ReturnCarUseCase {
  constructor(
    @inject("RentalsRepository")
    private rentalRepository: IRentalsRepository,
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,
    @inject("DateProvider")
    private dateProvider: IDateProvider
  ) {}
  async execute(data: IRequest) {
    const rental = await this.rentalRepository.findByID(data.id);

    if (!rental) {
      throw new AppError("Rental does not exist");
    }

    const dateNow = this.dateProvider.dateNow();

    let daily = this.dateProvider.compareInDays(dateNow, dateNow);

    if (daily <= 0) {
      daily = 1;
    }

    const delays = this.dateProvider.compareInDays(
      dateNow,
      rental.expected_return_date
    );

    let total = 0;
    const car = await this.carsRepository.findById(rental.car_id);
    if (delays > 0) {
      const calculate_fine = delays * car.fine_amount;
      total = calculate_fine;
    }

    total = total + daily * car.daily_rate;
    total += daily * (await car).daily_rate;
    rental.end_date = dateNow;
    rental.total = total;

    await this.rentalRepository.create(rental);
    await this.carsRepository.updateAvailable(car.id, true);
    return rental;
  }
}
