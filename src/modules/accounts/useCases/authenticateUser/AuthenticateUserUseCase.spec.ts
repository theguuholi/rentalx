import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UserReporitoryInMemory } from "../../repositories/inmemory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let userReporitoryInMemory: UserReporitoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    userReporitoryInMemory = new UserReporitoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      userReporitoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(userReporitoryInMemory);
  });
  it("should be able to authentica an user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "123",
      name: "123",
      email: "test@test.com",
      password: "test@test.com",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    // console.log(result);

    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate an non existend user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "123",
        password: "123",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate incorrect password", () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "123",
        name: "123",
        email: "test@test.com",
        password: "test@test.com",
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: "123",
      });
      
    }).rejects.toBeInstanceOf(AppError);
  });
});
