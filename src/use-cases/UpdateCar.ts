import { Car } from "../domain/entities/Car";
import { ICar } from "../domain/interfaces/ICar";

export class UpdateCar {
  constructor(private carRepository: ICar) {}

  async execute(car: Car) {
    await this.carRepository.updateCar(car);
  }
}
