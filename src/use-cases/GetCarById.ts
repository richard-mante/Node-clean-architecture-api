import { ICar } from "../domain/interfaces/ICar";

export class GetCarById {
  constructor(private carRepository: ICar) {}

  async execute(id: string) {
    await this.carRepository.getCarById(id);
  }
}
