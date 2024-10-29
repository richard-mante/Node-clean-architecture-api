import { PrismaClient } from "@prisma/client";
import { Car } from "../../domain/entities/Car";
import { ICar } from "../../domain/interfaces/ICar";
import { CarDb } from "../database/CarDb";

export class CarsRepository implements ICar {
  private prisma = new PrismaClient();
  private db = new CarDb();
  async getAllCars(): Promise<Array<Car>> {
    return await this.db.getAll();
  }

  async getCarById(id: number): Promise<Car | null> {
    return await this.db.getById(id);
  }

  async updateCar(car: Car): Promise<Car> {
    return await this.db.update(car);
  }

  async createCar(car: Car): Promise<Car> {
    return await this.db.create(car);
  }

  async deleteCar(id: number): Promise<Car> {
    return await this.db.delete(id);
  }
}
