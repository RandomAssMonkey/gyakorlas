import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import type { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getHello(@Res() res: Response): string {
    return this.appService.getHello();
  }
}
