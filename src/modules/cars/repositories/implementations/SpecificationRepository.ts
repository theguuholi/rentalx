import { Category } from "../../model/Category";
import { ICreateSpecificationDTO } from "../ISpecificationRepository";


class SpecificationRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({name, description} : ICreateSpecificationDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    console.log(this.categories)
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category
  }
}

export { SpecificationRepository };
