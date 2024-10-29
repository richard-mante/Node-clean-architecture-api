import { ICar } from "../../domain/interfaces/ICar";

export class DeleteCar {
  constructor(private carRepository: ICar) {}

  async execute(id: number) {
    return await this.carRepository.deleteCar(id);
  }
}
