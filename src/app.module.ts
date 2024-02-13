import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './app/modules/users/users.module';
import { AuthModule } from './auth/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/guard/auth.guard';
import { UsersService } from './app/modules/users/users.service';
import { PrismaService } from './app/database/prisma.service';
import { UserRepository } from './app/repositories/user/User.repository';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UsersModule, AuthModule],
  controllers: [],
  providers: [
    UsersService,
    UserRepository,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
