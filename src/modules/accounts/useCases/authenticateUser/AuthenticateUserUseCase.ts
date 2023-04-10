import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { compare } from "bcryptjs";
import { AppError } from "../../../../shared/errors/AppError";
interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password is incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password is incorrect");
    }

    const token = sign({}, "84a26c4612a7f9958174ee6552625282", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email,
      },
      token,
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
