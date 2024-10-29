import { Car, PrismaClient } from "@prisma/client";
export class CarDb {
  private prisma = new PrismaClient();

  async getAll(): Promise<Array<Car>> {
    const cars = await this.prisma.car.findMany();
    return cars;
  }

  async getById(id: number): Promise<Car | null> {
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

  async create(car: Car) {
    const newCar = await this.prisma.car.create({
      data: {
        name: car.name,
        brand: car.brand,
        model: car.model,
      },
    });
    return newCar;
  }

  async update(car: Car) {
    const updated = await this.prisma.car.update({
      where: {
        id: car.id,
      },
      data: {
        name: car.name,
        brand: car.brand,
        model: car.model,
      },
    });

    return updated;
  }
  async delete(id: number) {
    const car = await this.prisma.car.delete({
      where: {
        id: id,
      },
    });
    return car;
  }
}
