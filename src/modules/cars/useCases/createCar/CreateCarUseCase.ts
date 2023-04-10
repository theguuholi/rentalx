import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { injectable } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}
// @injectable()
class CreateCarUseCase {
  constructor(
    // @inject("CarsRepository") 
    private carsRepository: ICarsRepository
  ){}
  
  async execute(request: IRequest): Promise<void> {
    this.carsRepository.create(request)
  }
}

export { CreateCarUseCase };
  function inject(arg0: string): (target: typeof CreateCarUseCase, propertyKey: undefined, parameterIndex: 0) => void {
    throw new Error("Function not implemented.");
  }

