import { UserEntiy } from 'src/entity/user/user.entity';

export interface IUserRepository {
  findByEmail(email: string): Promise<UserEntiy | null>;
  findById(id: string): Promise<UserEntiy | null>;
  findById(username: string): Promise<UserEntiy | null>;
}
