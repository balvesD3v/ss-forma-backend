import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: UserDTO): Promise<User> {
    const checkEmailExist = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    const checkUsernameExist = await this.prisma.user.findFirst({
      where: {
        name: data.name,
      },
    });

    if (checkEmailExist) {
      throw new HttpException(
        'Já existe um cadastro com esse email',
        HttpStatus.CONFLICT,
      );
    }

    if (checkUsernameExist) {
      throw new HttpException(
        'Já existe um cadastro com esse email',
        HttpStatus.CONFLICT,
      );
    }

    data.password = await bcrypt.hash(data.password, 12);

    const user = await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
      },
    });

    delete user.password;
    return user;
  }

  async update(id: string, data: UpdateUserDto) {
    const checkUserExist = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!checkUserExist) {
      throw new HttpException('Esse usuário não existe!', HttpStatus.CONFLICT);
    }

    data.password = await bcrypt.hash(data.password, 12);

    const user = await this.prisma.user.update({
      data,
      where: {
        id,
      },
    });

    delete user.password;
    return user;
  }

  async remove(id: string) {
    const checkUserExist = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!checkUserExist) {
      throw new HttpException('Esse usuário não existe!', HttpStatus.CONFLICT);
    }

    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }
}
