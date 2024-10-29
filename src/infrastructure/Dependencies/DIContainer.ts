

import { CreateCar } from "../../application/use-cases/CreateCar";
import { DeleteCar } from "../../application/use-cases/DeleteCar";
import { GetAllCars } from "../../application/use-cases/GetAllCars";
import { GetCarById } from "../../application/use-cases/GetCarById";
import { UpdateCar } from "../../application/use-cases/UpdateCar";
import { CarsRepository } from "../repositories/CarsRepository";

export class DIContainer {
  private static _carRepository = new CarsRepository();
  static getCarRepository() {
    return this._carRepository;
  }

  static getAllCars() {
    
    return new GetAllCars(this.getCarRepository());
  }

  static getCarById() {
    return new GetCarById(this.getCarRepository());
  }

  static createCar() {
    return new CreateCar(this.getCarRepository());
  }

  static updateCar() {
    return new UpdateCar(this.getCarRepository());
  }

  static deleteCar() {
    return new DeleteCar(this.getCarRepository());
  }
}
