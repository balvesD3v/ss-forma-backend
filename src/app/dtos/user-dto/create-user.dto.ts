import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDTO {
  id?: string;

  roles: string;

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

  @MinLength(8, { message: 'A senha tem que ter mais de 8 caracteres' })
  @MaxLength(20, { message: 'A senha tem que ter menos de 20 caracteres' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'A senha precisa de uma letra maiuscula, uma minuscula, um caracter especial ou um número',
  })
  password: string;

  phone: string;
}
