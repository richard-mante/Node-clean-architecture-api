import { PrismaClient } from "@prisma/client";
import { Car } from "../../domain/entities/Car";
import { ICar } from "../../domain/interfaces/ICar";

export class CarsRepository implements ICar {
  private prisma = new PrismaClient();

  async getAllCars(): Promise<Array<Car>> {
    const cars = await this.prisma.car.findMany();
    return cars;
  }

  async getCarById(id: number): Promise<Car | null> {
    const car = await this.prisma.car.findFirst({
      where: {
        id: id,
      },
    });
    if (car) {
      return car;
    }
    return null;
  }

  async updateCar(car: Car): Promise<Car> {
    const update = await this.prisma.car.update({
      where: {
        id: car.id,
      },
      data: {
        name: car.name,
        brand: car.brand,
        model: car.model,
      },
    });

    return update;
  }

  async createCar(car: Car): Promise<Car> {
    const created = await this.prisma.car.create({
      data: {
        name: car.name,
        brand: car.brand,
        model: car.model,
      },
    });
    return created;
  }

  async deleteCar(id: number): Promise<Car> {
    const car = await this.prisma.car.delete({
      where: {
        id: id,
      },
    });
    return car;
  }
}
