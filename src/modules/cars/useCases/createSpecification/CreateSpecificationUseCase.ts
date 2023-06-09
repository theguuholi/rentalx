import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateSpecificationUseCase {
    constructor(@inject("SpecificationRepository") private specificationRepository: ISpecificationRepository){}

    async execute({name, description}: IRequest): Promise<void> {
        const specifciationAlreadyExist = await this.specificationRepository.findByName(name);

        if (specifciationAlreadyExist) {
            throw new AppError("Specification already exists!")
        }
        
        await this.specificationRepository.create({ name, description });
    }
}

export {CreateSpecificationUseCase}