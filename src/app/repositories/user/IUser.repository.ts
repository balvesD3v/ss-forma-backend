import { UpdateUserDto } from 'src/app/dtos/user-dto/update-user.dto';
import { UserEntiy } from '../../entity/user/user.entity';
import { UserDTO } from 'src/app/dtos/user-dto/create-user.dto';

export interface IUserRepository {
  create(data: UserDTO): Promise<UserEntiy | null>;
  update(id: string, data: UpdateUserDto): Promise<UserEntiy | null>;
  delete(id: string): Promise<UserEntiy | null>;
  findByEmail(email: string): Promise<UserEntiy | null>;
  findById(id: string): Promise<UserEntiy | null>;
  findById(username: string): Promise<UserEntiy | null>;
}
