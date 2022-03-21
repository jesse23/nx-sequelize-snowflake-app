import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '@nx-sequelize-snowflake-app/user'
import { ForecastModule } from '@nx-sequelize-snowflake-app/forecast'

@Module({
  imports: [UserModule, ForecastModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
