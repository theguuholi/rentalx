import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendForgotPAsswordMailUseCase } from "./SendForgotPasswordMailUseCase";

class SendForgotPAsswordMailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;
    const resolver = container.resolve(SendForgotPAsswordMailUseCase);
    const refreshToken = await resolver.execute(email);

    return response.send();
  }
}

export { SendForgotPAsswordMailController };
