import { Car } from "../domain/entities/Car";
import { ICar } from "../domain/interfaces/ICar";

export class CreateCar {
  constructor(private carRepositoy: ICar) {}

  async execute(car: Car) {
    await this.carRepositoy.createCar(car);
  }
}
