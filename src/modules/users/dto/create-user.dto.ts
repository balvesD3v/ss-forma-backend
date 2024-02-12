import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDTO {
  @IsNotEmpty({ message: 'Esse campo é obrigatório!' })
  name: string;

  @IsNotEmpty({ message: 'Esse campo é obrigatório!' })
  @IsEmail()
  email: string;

  @MinLength(4)
  @MaxLength(20)
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
    message:
      'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número',
  })
  @IsNotEmpty({ message: 'Esse campo é obrigatório!' })
  password: string;

  @IsPhoneNumber()
  phone?: string;
}
