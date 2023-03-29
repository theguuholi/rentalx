import { Router } from "express";
import multer from "multer";
import upload from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/CreateUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRouters = Router();

const uploadAvatar = multer(upload.upload("./tmp/avatar"))

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRouters.post("/", createUserController.handle);
usersRouters.patch("/avatar", 
ensureAuthenticated,
uploadAvatar.single("avatar"), updateUserAvatarController.handle);

export { usersRouters };
