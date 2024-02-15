import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDTO } from '../../dtos/user-dto/create-user.dto';
import { PrismaService } from '../../database/prisma.service';
import { User } from '@prisma/client';
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

    return await this.userRepository.create(data);
  }

  async update(id: string, data: UpdateUserDto) {
    const checkUserExist = await this.userRepository.findById(id);

    if (!checkUserExist) {
      throw new HttpException('Esse usuário não existe!', HttpStatus.CONFLICT);
    }

    return await this.userRepository.update(id, data);
  }

  async remove(id: string) {
    const checkUserExist = await this.userRepository.findById(id);

    if (!checkUserExist) {
      throw new HttpException('Esse usuário não existe!', HttpStatus.CONFLICT);
    }

    return await this.userRepository.delete(id);
  }

  async findAll() {
    const findUsers = await this.prisma.user.findMany();

    if (!findUsers) {
      throw new HttpException('Não existem usuários', HttpStatus.CONFLICT);
    }

    return findUsers;
  }

  async findOne(id: string) {
    const findOneUser = await this.userRepository.findById(id);

    if (!findOneUser) {
      throw new HttpException('Esse usuário não existe', HttpStatus.CONFLICT);
    }

    return findOneUser;
  }
}
