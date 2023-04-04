import { Type } from 'class-transformer';
import { IsString, IsInt, IsPositive, Min } from 'class-validator';

export class CreatUserDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsInt()
  @IsPositive()
  @Min(18)
  age: number;
}
