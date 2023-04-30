import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendForgotPAsswordMailUseCase } from "../sendForgotPasswordMail/SendForgotPasswordMailUseCase";
import { ResetPasswordUserUseCase } from "./resetPasswordUserUseCase";

class ResetPasswordUserUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { token } = request.query;
    const { password } = request.body;
    const resolver = container.resolve(ResetPasswordUserUseCase);
    await resolver.execute(token, password);

    return response.send();
  }
}

export { ResetPasswordUserUserController };
