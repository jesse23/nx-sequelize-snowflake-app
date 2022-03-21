import { Module } from '@nestjs/common';
import { FORECAST_REPOSITORY } from './constants';
import { ForecastController } from './forecast.controller';
import { ForecastDay } from './forecast.entity';
import { ForecastService } from './forecast.service';
import { Sequelize } from 'sequelize-typescript';

@Module({
  controllers: [ForecastController],
  providers: [ForecastService, {
    provide: FORECAST_REPOSITORY,
    useValue: ForecastDay,
  }, {
    provide: process.env.SEQ_WEATHER_DB,
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
          schema: process.env.SEQ_WEATHER_SCHEMA
        },
        username: process.env.SEQ_USER,
        password: process.env.SEQ_PW,
        database: process.env.SEQ_WEATHER_DB,
      });
      sequelize.addModels([ForecastDay]);
      // await sequelize.sync();
      return sequelize;
    },
  }],
  exports: [ForecastService],
})
export class ForecastModule {}
