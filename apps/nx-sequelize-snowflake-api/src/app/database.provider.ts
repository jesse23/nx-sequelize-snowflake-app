import { Sequelize } from 'sequelize-typescript';
import { Cat } from './cat.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
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
          schema: process.env.SEQ_SCHEMA
        },
        username: process.env.SEQ_USER,
        password: process.env.SEQ_PW,
        database: process.env.SEQ_DB,
      });
      sequelize.addModels([Cat]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
