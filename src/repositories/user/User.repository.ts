import { Injectable } from '@nestjs/common';
import { IUserRepository } from './IUser.repository';
import { PrismaService } from 'src/database/prisma.service';
import { UserEntiy } from 'src/entity/user/user.entity';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findByEmail(email: string): Promise<UserEntiy | null> {
    const user = await this.prismaService.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  }

  async findById(id: string): Promise<UserEntiy | null> {
    return await this.prismaService.user.findFirst({
      where: {
        id,
      },
    });
  }

  async findByName(name: string): Promise<UserEntiy | null> {
    return await this.prismaService.user.findFirst({
      where: {
        name,
      },
    });
  }
}
