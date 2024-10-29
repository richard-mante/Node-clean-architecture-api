import { ICar } from "../domain/interfaces/ICar";

export class GetAllCars {
  constructor(private carRepository: ICar) {}

  async execute() {
    return await this.carRepository.getAllCars();
  }
}
