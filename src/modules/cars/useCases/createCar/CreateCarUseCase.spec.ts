import { CarsRepositoryInMemory } from "@modules/cars/repositories/memories/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";
import { AppError } from "@shared/errors/AppError";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("create car", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Name car",
      description: "description car",
      daily_rate: 100,
      license_plate: "license_plate car",
      fine_amount: 60,
      brand: "brand car",
      category_id: "category_id car",
    });

    expect(car).toHaveProperty("id")
  });

  it("should not be able with a license_plate that already exist", async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Name car",
        description: "description car",
        daily_rate: 100,
        license_plate: "license_plate car",
        fine_amount: 60,
        brand: "brand car",
        category_id: "category_id car",
      });

      await createCarUseCase.execute({
        name: "Name car",
        description: "description car",
        daily_rate: 100,
        license_plate: "license_plate car",
        fine_amount: 60,
        brand: "brand car",
        category_id: "category_id car",
      });
    }).rejects.toBeInstanceOf(AppError)

  });

  it("creating a car, should be available", async () => {
    const car = await createCarUseCase.execute({
      name: "123123 car",
      description: "323 car",
      daily_rate: 100,
      license_plate: "1213123 car",
      fine_amount: 60,
      brand: "32323 car",
      category_id: "category_id car",
    });

    expect(car.available).toBe(true)
  });
});
