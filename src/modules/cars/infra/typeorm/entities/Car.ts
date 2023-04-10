import { v4 as uuidv4 } from "uuid";

 class Car {
  id?: string;

  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Car}
