import { Injectable, Inject } from '@nestjs/common';
import { USER_REPOSITORY } from './constants';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: typeof User
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll<User>();
  }

  async createUser(user: Partial<User>): Promise<void> {
    Promise.resolve();
    await this.userRepository.create(user)
  }
}

