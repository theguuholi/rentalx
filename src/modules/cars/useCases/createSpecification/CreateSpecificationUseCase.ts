import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateSpecificationUseCase {
    constructor(@inject("SpecificationRepository") private specificationRepository: ISpecificationRepository){}

    execute({name, description}: IRequest): void {
        const specifciationAlreadyExist = this.specificationRepository.findByName(name);

        if (specifciationAlreadyExist) {
            throw new Error("Specification already exists!")
        }
        
        this.specificationRepository.create({ name, description });
    }
}

export {CreateSpecificationUseCase}