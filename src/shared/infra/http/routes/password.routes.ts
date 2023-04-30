import { Router } from "express";
import { SendForgotPAsswordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordEmailController";
import { ResetPasswordUserUserController } from "@modules/accounts/useCases/resetPasswordUser/SendForgotPasswordEmailController copy";

const passwordRoutes = Router();

passwordRoutes.post("/forgot", new SendForgotPAsswordMailController().handle);
passwordRoutes.post("/reset", new ResetPasswordUserUserController().handle);


export { passwordRoutes };
