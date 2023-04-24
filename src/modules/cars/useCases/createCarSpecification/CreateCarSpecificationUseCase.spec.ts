import { CarsRepositoryInMemory } from "@modules/cars/repositories/memories/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecification";
import { SpecificationInMemory } from "@modules/cars/repositories/memories/SpecificationInMemory";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRespositoryInMemory: CarsRepositoryInMemory;
let specificationRepositoryInMemory: SpecificationInMemory;

describe("CreateCarSpecificationUseCase", () => {
  beforeEach(() => {
    carsRespositoryInMemory = new CarsRepositoryInMemory();
    specificationRepositoryInMemory = new SpecificationInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRespositoryInMemory,
      specificationRepositoryInMemory
    );
  });

  it("should be able to add a new specification to a car", async () => {
    const car = await carsRespositoryInMemory.create({
      name: "44234234",
      description: "Carro grande",
      license_plate: "1231123",
      daily_rate: 140,
      fine_amount: 140,
      brand: "BMW",
      category_id: "234234",
    });

    const specification = await specificationRepositoryInMemory.create({
      name: "Test",
      description: "Test",
    });

    const specifications_id = [specification.id];

    const specificationsCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id: specifications_id,
    });

    expect(specificationsCars).toHaveProperty("specifications");
    expect(specificationsCars.specifications.length).toBe(1);
  });

  it("should throw error when car does not exist", async () => {
    expect(async () => {
      const car_id = "12332";

      const specifications_id = ["dfs123"];

      await createCarSpecificationUseCase.execute({
        car_id: car_id,
        specifications_id: specifications_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
