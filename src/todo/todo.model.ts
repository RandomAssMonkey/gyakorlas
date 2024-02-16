import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Type } from "class-transformer";

export class TodoModel {
  id!: number;

  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  text!: string;
}
