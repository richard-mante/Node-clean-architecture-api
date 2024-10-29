import { IsString } from "class-validator";

export class CreatBookDto {
  @IsString()
  name!: string;

  @IsString()
  brand!: string;

  @IsString()
  model!: string;
}
