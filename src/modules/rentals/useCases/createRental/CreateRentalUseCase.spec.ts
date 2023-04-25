import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/inMemory/RentalsRepositoryInMemory";
import { CreateRentalUseCase } from "./CreateRentalUseCase";
import { AppError } from "@shared/errors/AppError";

let createRentalUseCase: CreateRentalUseCase;
let rentalRepositoryInMemory: RentalsRepositoryInMemory;

describe("CreateRentalUseCase", () => {
  beforeEach(() => {
    rentalRepositoryInMemory = new RentalsRepositoryInMemory();
    createRentalUseCase = new CreateRentalUseCase(rentalRepositoryInMemory);
  });

  it("should be able to create a new rental", async () => {
    const data = {
      car_id: "2324",
      user_id: "123",
      expected_return_date: new Date(),
    };

    const rental = await createRentalUseCase.execute(data);

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });

  it("should not be able to create a new rental if user has one", async () => {
    expect(async () => {
      const data = {
        car_id: "2324",
        user_id: "123",
        expected_return_date: new Date(),
      };

      await createRentalUseCase.execute(data);
      await createRentalUseCase.execute(data);
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a rental if car is already booked", async () => {
    expect(async () => {
      const data = {
        car_id: "2324",
        user_id: "123",
        expected_return_date: new Date(),
      };

      const ad = {
        car_id: "2324",
        user_id: "12333",
        expected_return_date: new Date(),
      };

      await createRentalUseCase.execute(data);
      await createRentalUseCase.execute(ad);
    }).rejects.toBeInstanceOf(AppError);
  });
});
