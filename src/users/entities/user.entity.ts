import { User } from '@prisma/client';

export class UserEntity implements User {
  id: string;
  name: string;
  email: string;
  relieved: boolean;
  createdAt: Date;
  updatedAt: Date;
}
