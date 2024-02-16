import { IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class QueryTodoInputDto {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  limit!: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  offset!: number;
}
