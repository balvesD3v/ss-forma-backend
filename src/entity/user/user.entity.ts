import { User } from '@prisma/client';

export class UserEntiy implements User {
  id: string;
  email: string;
  name: string;
  password: string;
  phone: string;

  updated_at: Date;
  created_at: Date;
}
