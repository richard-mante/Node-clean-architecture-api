import { Car } from "../entities/Car";

export interface ICar {
  getAllCars(): Promise<Array<Car>>;
  getCarById(id: string): Promise<Car | null>;
  updateCar(car: Car): Promise<null>;
  createCar(car: Car): Promise<null>;
  deleteCar(id: string): Promise<null>;
}
