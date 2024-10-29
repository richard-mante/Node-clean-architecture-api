import { DIContainer } from "../../infrastructure/Dependencies/DIContainer";
import { Request, Response } from "express";

export class CarControllers {
  private getAllCars = DIContainer.getAllCars();
  private getCarById = DIContainer.getCarById();
  private createCar = DIContainer.createCar();
  private updateCar = DIContainer.updateCar();
  private deleteCar = DIContainer.deleteCar();

  async getAll(req: Request, res: Response) {
    let cars = await this.getAllCars.execute();
    res.json(cars);
  }

  async getById(req: Request, res: Response) {
    let car = await this.getCarById.execute(req.params.id);
    res.status(200);
  }

  async create(req: Request, res: Response) {
    let car = await this.createCar.execute(req.body);
    res.status(201);
  }

  async update(req: Request, res: Response) {
    await this.updateCar.execute(req.body);
    res.status(200);
  }

  async delete(req: Request, res: Response) {
    let car = await this.deleteCar.execute(req.params.id);
    res.status(200);
  }
}
