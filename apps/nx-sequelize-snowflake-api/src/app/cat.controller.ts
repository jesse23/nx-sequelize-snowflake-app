import { Controller, Get } from '@nestjs/common';

import { CatsService } from './cat.service';

@Controller()
export class CatController {
  constructor(private readonly catService: CatsService) {}

  @Get('/cat')
  getData() {
    return this.catService.findAll();
  }
}
