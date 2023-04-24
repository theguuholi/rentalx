import { container } from "tsyringe";
import { UploadCarImageUseCase } from "./UploadCarImageUseCase";

interface IFiles {
  filename: string;
}
export { Request, Response } from "express";
class UploadCarImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    console.log(request.files)
    const images = request.files as IFiles[];
    const uploadCarImageUseCase = container.resolve(UploadCarImageUseCase);

    await uploadCarImageUseCase.execute({
      car_id: id,
      images_name: images,
    });

    return response.status(201).send();
  }
}

export { UploadCarImageController };
