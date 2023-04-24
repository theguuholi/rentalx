import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationInMemory implements ISpecificationRepository {
  specifications: Specification[] = [];

  async findByName(name: string): Promise<Specification> {
    return await this.specifications.find(
      (specification) => specification.name === name
    );
  }

  async create(data: ICreateSpecificationDTO): Promise<Specification> {
    const specification = Object.assign(new Specification(), data);
    await this.specifications.push(specification);
    return specification;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    return await this.specifications.filter((specification) =>
      ids.includes(specification.id)
    );
  }
}

export { SpecificationInMemory };
