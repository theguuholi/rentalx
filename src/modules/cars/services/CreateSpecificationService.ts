import { AppError } from "../../../errors/AppError";
import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}
class CreateSpecificationService {
    constructor(private specificationRepository: ISpecificationRepository){}

    execute({name, description}: IRequest): void {
        const specificationAlreadyExist = this.specificationRepository.findByName(name);

        if (specificationAlreadyExist) {
            throw new AppError("Specification already exists!")
        }
        
        this.specificationRepository.create({ name, description });
    }
}

export {CreateSpecificationService}