import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUseCase;

describe("CreateRentalUseCase", () => {
  beforeEach(() => {
    createRentalUseCase = new CreateRentalUseCase();
  });

  it("should be able to create a new rental", () => {
    const data = {
      car_id: "2324",
      user_id: "123",
      expected_return_date: new Date(),
    };
    
    await createRentalUseCase.execute(data);
  });
});
