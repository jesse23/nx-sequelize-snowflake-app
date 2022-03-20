import { Module } from '@nestjs/common';
import { USER_REPOSITORY } from './constants';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Sequelize } from 'sequelize-typescript';

@Module({
  controllers: [UserController],
  providers: [UserService, {
    provide: USER_REPOSITORY,
    useValue: User,
  }, {
    provide: process.env.SEQ_USER_DB,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'snowflake',
        quoteIdentifiers: false,
        dialectOptions: {
          // put your snowflake account here,
          account: process.env.SEQ_ACCOUNT,  // my-app.us-east-1

          // below option should be optional
          role: process.env.SEQ_ROLE,
          warehouse: process.env.SEQ_WH,
          schema: process.env.SEQ_USER_SCHEMA
        },
        username: process.env.SEQ_USER,
        password: process.env.SEQ_PW,
        database: process.env.SEQ_USER_DB,
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  }],
  exports: [UserService],
})
export class UserModule {}
