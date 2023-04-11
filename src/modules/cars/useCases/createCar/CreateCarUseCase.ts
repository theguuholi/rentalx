import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}
@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository") 
    private carsRepository: ICarsRepository
  ){}
  
  async execute(request: IRequest): Promise<Car> {
    const carAlreadyExist = await this.carsRepository.findByLicensePlate(request.license_plate)

    if(carAlreadyExist) {
      throw new AppError("Car already Exist!")
    }
    
    const car = this.carsRepository.create(request)
    return car;
  }
}

export { CreateCarUseCase };

