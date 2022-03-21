import { Test } from '@nestjs/testing';
import { ForecastService } from './forecast.service';

describe('ForecastService', () => {
  let service: ForecastService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ForecastService],
    }).compile();

    service = module.get(ForecastService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
