import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../../database/prisma.service';
import { UserRepository } from '../../repositories/user/User.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UserRepository],
})
export class UsersModule {}
