import { Rental } from "../infra/typeorm/entities/Rental";

interface ICreateRentalDTO {
  car_id: string;
  user_id: string;
  expected_return_date: Date;
  id?: string;
  end_date?: string;
}
interface IRentalsRepository {
  findByID(id: string): Promise<Rental>;
  create(data: ICreateRentalDTO): Promise<Rental>;
  findOpenRentalByUser(user_id: string): Promise<Rental>;
  findByCar(car_id: string): Promise<Rental>;
}

export { IRentalsRepository };
