import { ICar } from "../domain/interfaces/ICar";

export class DeleteCar {
  constructor(private carRepository: ICar) {}

  async execute(id: string) {
    await this.carRepository.deleteCar(id);
  }
}
