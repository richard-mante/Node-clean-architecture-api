import { DIContainer } from "../../infrastructure/Dependencies/DIContainer";
import { Request, Response } from "express";
import { CreatBookDto } from "../dto/CreateBookDto";
import { validate } from "class-validator";

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
    res.status(200).json(car);
  }

  async create(req: Request, res: Response) {
    const dto = Object.assign(new CreatBookDto(), req.body);
    const errors = await validate(dto);
    if (errors.length > 0) {
      res.status(400).json();
    } else {
      let car = await this.createCar.execute(req.body);
      res.status(201);
    }
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
