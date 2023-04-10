import { ICreateCarDTO } from "../dtos/ICreateCarDto"

interface ICarsRepository {
    create(data: ICreateCarDTO): Promise<void>;
}

export {ICarsRepository}