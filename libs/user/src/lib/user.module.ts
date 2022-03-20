import { Module } from '@nestjs/common';
import { USER_REPOSITORY } from './constants';
import { databaseProviders } from './database.provider';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, {
    provide: USER_REPOSITORY,
    useValue: User,
  }, ...databaseProviders],
  exports: [UserService],
})
export class UserModule {}
