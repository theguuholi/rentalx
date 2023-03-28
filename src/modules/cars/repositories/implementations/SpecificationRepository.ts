import { Specification } from "../../model/Specification";
import { ICreateSpecificationDTO } from "../ISpecificationRepository";

class SpecificationRepository {
  private specifications: Specification[];
  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
  }

  create({name, description} : ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification {
    const Specification = this.specifications.find((Specification) => Specification.name === name);
    return Specification
  }
}

export { SpecificationRepository };
