import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from '../../app/dtos/auth-dto/create-auth.dto';
import { isPublic } from '../decorators/is-publickey.decorators';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @isPublic()
  @Post('login')
  signIn(@Body() authDTO: AuthDTO) {
    return this.authService.signIn(authDTO);
  }
}
