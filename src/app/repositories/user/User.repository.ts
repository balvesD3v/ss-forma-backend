import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUserRepository } from './IUser.repository';
import { PrismaService } from '../../database/prisma.service';
import { UserEntiy } from '../../entity/user/user.entity';
import { UpdateUserDto } from 'src/app/dtos/user-dto/update-user.dto';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UserDTO } from 'src/app/dtos/user-dto/create-user.dto';

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

  async delete(id: string): Promise<UserEntiy> {
    const checkUserExist = await this.findById(id);

    if (!checkUserExist) {
      throw new HttpException('Esse usuário não existe!', HttpStatus.CONFLICT);
    }

    return await this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: UpdateUserDto): Promise<UserEntiy> {
    const rolesArray =
      typeof data.roles === 'string' ? [data.roles as Role] : data.roles;
    const checkUserExist = await this.findById(id);
    const emailInUse = await this.findByEmail(data.email);

    if (!checkUserExist) {
      throw new HttpException('Esse usuário não existe!', HttpStatus.CONFLICT);
    }

    if (emailInUse) {
      throw new HttpException('Esse usuário existe!', HttpStatus.CONFLICT);
    }

    const user = await this.prismaService.user.update({
      data: {
        ...data,
        roles: rolesArray,
      },
      where: {
        id,
      },
    });

    data.password = await bcrypt.hash(data.password, 12);
    delete user.password;
    return user;
  }

  async create(data: UserDTO): Promise<UserEntiy> {
    const rolesArray =
      typeof data.roles === 'string' ? [data.roles as Role] : data.roles;
    const checkEmailExist = await this.findByEmail(data.email);
    const checkNameExist = await this.findByName(data.password);

    if (checkEmailExist) {
      throw new HttpException(
        'Já existe um cadastro com esse email',
        HttpStatus.CONFLICT,
      );
    }

    if (checkNameExist) {
      throw new HttpException(
        'Já existe um cadastro com esse nome de usuário',
        HttpStatus.CONFLICT,
      );
    }

    data.password = await bcrypt.hash(data.password, 12);

    const user = await this.prismaService.user.create({
      data: {
        ...data,
        roles: rolesArray,
      },
    });

    delete user.password;
    return user;
  }
}
