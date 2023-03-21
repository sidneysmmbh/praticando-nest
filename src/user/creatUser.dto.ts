import { Type } from 'class-transformer';
import { IsString, IsInt } from 'class-validator';

export class CreatUserDto {
  @IsInt()
  @Type(() => Number)
  id: number;

  @IsString()
  name: string;

  @IsInt()
  @Type(() => Number)
  age: number;
}
