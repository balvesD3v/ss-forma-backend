import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDTO } from '../../dtos/user-dto/create-user.dto';
import { PrismaService } from '../../database/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from '../../dtos/user-dto/update-user.dto';
import { UserRepository } from '../../repositories/user/User.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userRepository: UserRepository,
  ) {}

  async create(data: UserDTO): Promise<User | null> {
    const checkEmailExist = await this.userRepository.findByEmail(data.email);
    const checkNameExist = await this.userRepository.findByName(data.password);

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

    const user = await this.prisma.user.create({
      data,
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
