import { Test } from '@nestjs/testing';
import { ForecastController } from './forecast.controller';
import { ForecastService } from './forecast.service';

describe('ForecastController', () => {
  let controller: ForecastController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ForecastService],
      controllers: [ForecastController],
    }).compile();

    controller = module.get(ForecastController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
