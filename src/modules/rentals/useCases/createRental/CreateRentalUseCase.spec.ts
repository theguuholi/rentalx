import dayjs from "dayjs";

import { AppError } from "@shared/errors/AppError";
import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/inMemory/RentalsRepositoryInMemory";
import { CreateRentalUseCase } from "./CreateRentalUseCase";
import { DayJsDateProvider } from "@shared/container/providers/DateProvider/impl/DayJsDateProvider";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/memories/CarsRepositoryInMemory";

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let dayJsProvider: DayJsDateProvider;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Rental", () => {
  const dayAdd24Hours = dayjs().add(2, "day").toDate();

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();

    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    dayJsProvider = new DayJsDateProvider();
    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepositoryInMemory,
      dayJsProvider,
      carsRepositoryInMemory
    );
  });

  it("should be able to create a new rental", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "teste",
      description: "Car test",
      daily_rate: 100,
      license_plate: "test",
      fine_amount: 49,
      category_id: "1234567",
      brand: "brand",
    });

    const rental = await createRentalUseCase.execute({
      user_id: "12345",
      car_id: car.id,
      expected_return_date: dayAdd24Hours,
    });

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });

  it("should not be able to create a new rental if there is another open to the same user", async () => {
    expect(async () => {
      const car = await carsRepositoryInMemory.create({
        name: "teste",
        description: "Car test",
        daily_rate: 100,
        license_plate: "test",
        fine_amount: 49,
        category_id: "1234567",
        brand: "brand",
      });

      await createRentalUseCase.execute({
        user_id: "12345",
        car_id: car.id,
        expected_return_date: dayAdd24Hours,
      });

      await createRentalUseCase.execute({
        user_id: "12345",
        car_id: car.id,
        expected_return_date: dayAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new rental if there is another open to the same car", async () => {
    expect(async () => {
      const car = await carsRepositoryInMemory.create({
        name: "teste",
        description: "Car test",
        daily_rate: 100,
        license_plate: "test",
        fine_amount: 49,
        category_id: "1234567",
        brand: "brand",
      });

      await createRentalUseCase.execute({
        user_id: "123",
        car_id: car.id,
        expected_return_date: dayAdd24Hours,
      });

      await createRentalUseCase.execute({
        user_id: "321",
        car_id: car.id,
        expected_return_date: dayAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("error when rental is less than 24 hours", async () => {
    expect(async () => {
      const car = await carsRepositoryInMemory.create({
        name: "teste",
        description: "Car test",
        daily_rate: 100,
        license_plate: "test",
        fine_amount: 49,
        category_id: "1234567",
        brand: "brand",
      });

      await createRentalUseCase.execute({
        user_id: "321",
        car_id: car.id,
        expected_return_date: new Date(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
