import { CarsRepositoryInMemory } from "@modules/cars/repositories/memories/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRespositoryInMemory: CarsRepositoryInMemory;

describe("ListCarsUseCase", () => {
  beforeEach(() => {
    carsRespositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRespositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRespositoryInMemory.create({
      name: "44234234",
      description: "Carro grande",
      license_plate: "1231123",
      daily_rate: 140,
      fine_amount: 140,
      brand: "BMW",
      category_id: "234234",
    });

    const cars = await listCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRespositoryInMemory.create({
      name: "44234234",
      description: "Carro grande",
      license_plate: "1231123",
      daily_rate: 140,
      fine_amount: 140,
      brand: "BMW",
      category_id: "234234",
    });

    const cars = await listCarsUseCase.execute({
      name: "44234234",
    });
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRespositoryInMemory.create({
      name: "44234234",
      description: "Carro grande",
      license_plate: "1231123",
      daily_rate: 140,
      fine_amount: 140,
      brand: "BMW",
      category_id: "234234",
    });

    const cars = await listCarsUseCase.execute({
      brand: "BMW",
    });
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRespositoryInMemory.create({
      name: "44234234",
      description: "Carro grande",
      license_plate: "1231123",
      daily_rate: 140,
      fine_amount: 140,
      brand: "BMW",
      category_id: "categor",
    });

    const cars = await listCarsUseCase.execute({
      category_id: "categor",
    });
    expect(cars).toEqual([car]);
  });
});
