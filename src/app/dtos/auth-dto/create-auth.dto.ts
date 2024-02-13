import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class AuthDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(4)
  @MaxLength(20)
  @IsNotEmpty()
  password: string;
}
