import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat.controller';
import { catsProviders } from './cat.providers';
import { CatsService } from './cat.service';
import { databaseProviders } from './database.provider';

@Module({
  imports: [],
  controllers: [AppController, CatController],
  providers: [AppService, CatsService, ...catsProviders, ...databaseProviders],
})
export class AppModule { }
