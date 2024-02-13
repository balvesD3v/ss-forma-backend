import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDTO {
  id?: string;

  @IsNotEmpty({
    message: 'Required Field',
  })
  @IsEmail()
  email: string;

  @IsNotEmpty({
    message: 'Required Field',
  })
  @IsString()
  name: string;

  @MinLength(4)
  @MaxLength(20)
  password: string;

  @IsPhoneNumber()
  phone: string;
}
