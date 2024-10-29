import { Car } from "../../domain/entities/Car";
import { ICar } from "../../domain/interfaces/ICar";

export class CarsRepository implements ICar{
    getAllCars(): Promise<Array<Car>> {
        throw new Error("Method not implemented.");
    }
    getCarById(id: string): Promise<Car | null> {
        throw new Error("Method not implemented.");
    }
    updateCar(car: Car): Promise<null> {
        throw new Error("Method not implemented.");
    }
    createCar(car: Car): Promise<null> {
        throw new Error("Method not implemented.");
    }
    deleteCar(id: string): Promise<null> {
        throw new Error("Method not implemented.");
    }

}