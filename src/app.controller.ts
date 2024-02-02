import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import type {Response} from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller()
export class PageController {
  constructor(private readonly appService: AppService) {}

@Get('/html')
getHTML(@Res() res: Response) {
  res.sendFile('index.html',  {root: 'public'});
}

@Get('/page/:param')
getPage(@Param('param') param: string) {
  return 'page:' + param;
  }
}
