import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthDTO } from '../../app/dtos/auth-dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../../app/repositories/user/User.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
  ) {}

  async signIn({
    email,
    password,
  }: AuthDTO): Promise<{ token: string; user: object }> {
    const user = await this.userRepository.findByEmail(email);
    const checkEmailExists = await this.userRepository.findByEmail(email);
    const passwordIsValid = await bcrypt.compare(
      password,
      checkEmailExists.password,
    );

    if (!passwordIsValid) {
      throw new HttpException('Senhas não coincidem!', HttpStatus.UNAUTHORIZED);
    }

    delete user.password;

    const token = this.jwtService.sign({
      subject: String(user.id),
    });

    return { user, token };
  }
}
