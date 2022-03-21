import { Injectable, Inject } from '@nestjs/common';
import { FORECAST_REPOSITORY } from './constants';
import { ForecastDay } from './forecast.entity';

@Injectable()
export class ForecastService {
  constructor(
    @Inject(FORECAST_REPOSITORY)
    private forecastRepository: typeof ForecastDay
  ) {}

  async getForecast(zipCode: string): Promise<ForecastDay[]> {
    const res = await this.forecastRepository.findAll<ForecastDay>({
      where: {
        'postal_code': zipCode
      }
    });
    console.log(res[0].postCode);
    return res;
  }
}


