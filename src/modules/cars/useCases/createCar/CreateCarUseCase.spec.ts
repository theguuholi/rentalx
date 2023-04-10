import { CarsRepositoryInMemory } from "./src/cars/repositories/memories/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("create car", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("should be able to create a new car", async () => {
    await createCarUseCase.execute({
      name: "Name car",
      description: "description car",
      daily_rate: 100,
      license_plate: "license_plate car",
      fine_amount: 60,
      brand: "brand car",
      category_id: "category_id car",
    });
  });
});
