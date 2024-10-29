import { Car } from "../entities/Car";

export interface ICar {
  getAllCars(): Promise<Array<Car>>;
  getCarById(id: number): Promise<Car | null>;
  updateCar(car: Car): Promise<Car>;
  createCar(car: Car): Promise<Car>;
  deleteCar(id: number): Promise<Car>;
}
