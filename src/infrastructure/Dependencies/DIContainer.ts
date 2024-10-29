import { CreateCar } from "../../use-cases/CreateCar";
import { DeleteCar } from "../../use-cases/DeleteCar";
import { GetAllCars } from "../../use-cases/GetAllCars";
import { GetCarById } from "../../use-cases/GetCarById";
import { UpdateCar } from "../../use-cases/UpdateCar";
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
