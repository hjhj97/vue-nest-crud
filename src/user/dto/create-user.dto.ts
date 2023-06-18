import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @MinLength(8)
  @IsNotEmpty()
  password: string;
}
