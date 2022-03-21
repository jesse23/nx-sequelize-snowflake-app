import {  Controller,  Get, Param } from '@nestjs/common';
import { ForecastService } from './forecast.service';

@Controller('forecast')
export class ForecastController {
  constructor(private forecastService: ForecastService) {}

  @Get(':zip_code')
  deleteUser(@Param('zip_code') zipCode: string) {
    return this.forecastService.getForecast(zipCode);
  }
}
