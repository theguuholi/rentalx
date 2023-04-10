import { AppError } from "../../../../shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/memories/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createRepositoryInMemory: CategoriesRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;
describe("Create Category", () => {
  beforeEach(() => {
    createRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(createRepositoryInMemory);
  });

  it("should be able to create a new category", async () => {
    const category = {
      name: "Category name",
      description: "Category description",
    };

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const categoryCreated = await createRepositoryInMemory.findByName(
      category.name
    );

    // console.log(categoryCreated);

    expect(categoryCreated).toHaveProperty("id");
  });

  it("should not be able to create a category with the same name", async () => {
    expect(async () => {
      const category = {
        name: "Category name",
        description: "Category description",
      };

      await createCategoryUseCase.execute(category);

      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
