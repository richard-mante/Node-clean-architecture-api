import { IsString } from "class-validator";

export class CreatCarDto {
  @IsString()
  name!: string;

  @IsString()
  brand!: string;

  @IsString()
  model!: string;
}
